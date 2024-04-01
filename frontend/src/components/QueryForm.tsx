/**
 * This file contains the defition and logic for the creating a query form component.
 * This includes the submit button as well since this is treated as a form.
 * The component interacts with the backend using pre-defined routes imported from the backend-services module.
 * @author Christopher Curtis
 */
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import {
  // Backend model route options
  createResponseService, // Default
  createParentalService,
  createExpertResponseService,
  createLikeService,
  createPlanResponseService,
} from "../services/backend-service";
import ExpandableText from "./ExpandableText";
import "../App.css";

// This defines the schema for the form used, expand here for form input validation
const schema = z.object({
  subject: z.string(),
  modifier: z.string(),
  additional: z.string(),
});
type FormData = z.infer<typeof schema>;

/**
 * Formats the string in a parsable way for the GPT model on the backend
 * @param subject the subject to ask the GPT model about
 * @param additional additional info the for the model to be aware of
 * @return formated string to be sent as query to model
 */
const formatString = (
  subject: string,
  additional: string
) => {
  return (
    "Tell me what you may want to do as a group: [" +
    subject + "]," +
    ", also please keep this in mind : [" +
    additional +
    "]."
  );
};

/**
 * Creates a query box, interacting with a gpt backend service.
 * Created using a React Hook Form, with fields as defined in the above schema.
 * @returns a QueryBox component
 */
const QueryForm = () => {
  // These variables are used for interacting with the form's state
  const {
    register, // Tracks the form fields
    handleSubmit, // Calls the on-submit logic
    formState: { errors, isValid }, // Tracks errors and wether or not the form is valid
  } = useForm<FormData>();

  // These variables trach the state of the component
  const [isLoading, setIsLoading] = useState(false); // Wether to show loading animation or not
  const [error, setError] = useState(""); // The error message (if any)
  const [queryResponse, setQueryResponse] = useState(""); // The most recent query response

  // Handles the on-sumbit logic for the form
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setIsLoading(true); // Triggers the loading animation

    // Creates post request for backend gpt model
    const { request, cancel } = createPlanResponseService().post([
      {
        role: "user",
        content: formatString(data.subject, data.additional),
      },
    ]);

    // Request is sent
    request
      .then((res) => {
        // Succesful request logic
        setQueryResponse(res.data); // We update the most recent query response
        console.log(res.data);
        setIsLoading(false); // We stop the loading animation
      })
      .catch((err) => {
        // Error handling logic
        setError(err.message); // We display the error message
        setIsLoading(false); // We stop the loading animation
      });
  };

  // We return the react markup needed for the component
  return (
    <div id="flexRow">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Answer these questions and find out some things to do while hanging out!</h2>
        {error && <p className="text-danger">{error}</p>}
        <br/>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Do you have any ideas of what you may want to do?
          </label>
          <br/>
          <input
            {...register("subject")}
            id="subject"
            type="text"
            className="form-control"
          />
          <br/>
          <label htmlFor="additional" className="form-label">
            Is there anything else you want me to know about, such as dietary or price restrictions?
          </label>
          <br/>
          <input
            {...register("additional")}
            id="additional"
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mb-3">Get Suggestions!</button>
      </form>
      
      <div id="response">
        {isLoading && <div className="spinner-border"></div>}
        <ExpandableText>{queryResponse}</ExpandableText>
      </div>
    </div>
  );
};

export default QueryForm;
