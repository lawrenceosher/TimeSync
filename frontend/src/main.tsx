// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css" //declaring it once in the root takes care of the import for all files
// import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   document.getElementById("root");
//   );

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
