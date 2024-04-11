import React from 'react';
import ReactDOM from 'react-dom/client'; //declaring it once in the root takes care of the import for all files
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
  
