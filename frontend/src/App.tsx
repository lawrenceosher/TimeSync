import Dashboard from './Dashboard';
import React from 'react';
import logo from './logo.svg'; 
import { HashRouter,Link} from 'react-router-dom';
import {Routes,Route,Navigate} from 'react-router';
import AI from "./AI";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
  
  return (
    <HashRouter>
      <div id="nav">
        <Link to="/Dashboard"> Dashboard</Link> |
        <Link to="/AI"> AI</Link>
      </div>

      <Routes>
        <Route path ="/" element ={<Navigate to="/Dashboard"/>}/>
        <Route path ="/AI" element ={<AI/>}/>

        <Route path ="/Dashboard" element ={ <Dashboard/>}/>

    </Routes>
    </HashRouter>
  )
}

export default App;
