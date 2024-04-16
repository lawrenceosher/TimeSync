# TimeSync

Link to Final Presentation: https://docs.google.com/presentation/d/14BGnd4kegumJHwiqvcCitN-fsqsLbOLsKKT67OzcZ9E/edit?usp=sharing

Note: This code is adapted from the CS5170-GPT-React-Workshop from Christopher Curtis
Link: https://github.com/CurtisChris7/CS5170-GPT-React-Workshop

Steps for running the code on your local machine:

To install necessary software go the project root folders for both the frontend and server folders, and enter: `npm i`

 Enter the server folder, and run `npm install -g nodemon`

 First run the server with `nodemon index.js` from the server folder.

Enter your OPENAI api key in the corresponding server file.

Then run the frontend with `npm run dev` from the frontend folder.

NOTE: Your editor may show errors when using `react-hook-form` in a couple of the components, such as: `Module '"react-hook-form"' has no exported member 'useForm'.` This should not prevent the code from running, and can be ignored.
