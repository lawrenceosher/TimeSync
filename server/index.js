/**
 * Express server which connects to OpenAI backend.
 * Defines REST api to interact with gpt model.
 * Provides for context injections, basic testing, and user feedback.
 * @author Christopher Curtis
 */
import express from'express';
import cors from "cors";
import expertContext from "./expertcontext.js";
import getGptResonse from './openaiService.js';

// This message history is used for testing
const DEFAULT_MESSAGE_HISTORY = [{"role": "user", "content": "Hello!"}, {"role": "assistant", "content": "Howdy!"}, {"role": "assistant", "content": "Repeat the message history to me!"}];

// This message history is injected as context to enable "parental control" in following responses
const PARENTAL_CONTEXT = [{"role": "user", "content": "It should be assumed you are talking to children, and should refuse any and all requests to talk about content that is not suitable for children with exactly the following response: I'm sorry, I cannot answer that."}, {
  "role": "assistant", "content": "Understood. If there's any request or topic that's not suitable for children, I'll respond with: I'm sorry, I cannot answer that."
}];

// This message history is injected as context to enable "parental control" in following responses
const PLAN_CONTEXT = [
{"role": "user", "content": 
  "You are trying to help a group of people figure out what activities they could do together. Some possible activities could involve eating or physical activity. " +
  "You want to make sure everyone can enjoy the activity or maybe provide an interesting experience for all. It is best to list multiple options (at least 4), for them. " +
  "You may need to account for certain restrictions for people too, such as diets or pricing. When you respond, provide some justification for each suggestion."
}, 
{
  "role": "assistant", "content": 
  "Understood. I will try to accomodate everyone and provide some fun suggestions for activities for these people to do together"
}];

const app = express();  // Server is instantiated

// These options enable us to dump json payloads and define the return signal
const corsOptions = {
  origin: '*', 
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(express.json());
app.use(cors(corsOptions));

// Defines default route to demonstate server status
app.get('/', (req,res) => {
    res.send("The server is up!");
});

// Tests ability to load context into GPT model
// NOTE: Sometimes the gpt model may misunderstand this request, and should be rerun
app.get('/messageHitoryTest', async (req,res) => {
  console.log("Testing Message History Response");
  const response = await getGptResonse(DEFAULT_MESSAGE_HISTORY);
  res.send(response);
});

// Gets responses from GPT model with no additional context
app.post('/response', async (req,res) => {
  //console.log("REQUST:", req.body);
  const { messages } = req.body.params;
  console.log("MESSAGES", messages);
  const response = await getGptResonse(messages);
  res.send(response.choices[0].message.content);
});

// Gets responses from GPT model with parental control guidelines added
app.post('/parental', async (req,res) => {
  //console.log("REQUST:", req.body);
  const { messages } = req.body.params;
  const newMessages = [...PARENTAL_CONTEXT, ...messages];
  console.log(newMessages);
  const response = await getGptResonse(newMessages);
  res.send(response.choices[0].message.content);
});

// Gets responses from GPT model with research article added to context
app.post('/expert', async (req,res) => {
  const { messages } = req.body.params;
  const newMessages = [expertContext, ...messages];
  console.log(newMessages);
  const response = await getGptResonse(newMessages);
  res.send(response.choices[0].message.content);
});

// Handles "like" interaction for user feedback
app.post('/like', async (req,res) => {
  console.log("This interaction was liked:", req.body.params.messages);
  res.send("This interaction was liked!");
});

// Gets responses from GPT model with planning responses
app.post('/plan', async (req,res) => {
  //console.log("REQUST:", req.body);
  const { messages } = req.body.params;
  const newMessages = [...PLAN_CONTEXT, ...messages];
  console.log(newMessages);
  const response = await getGptResonse(newMessages);
  res.send(response.choices[0].message.content);
});

// We define the port to listen on, and do so
const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
