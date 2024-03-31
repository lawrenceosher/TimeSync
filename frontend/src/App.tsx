import Dashboard from './Dashboard';
import React from 'react';
import logo from './logo.svg'; 
import { HashRouter,Link} from 'react-router-dom';
import {Routes,Route,Navigate} from 'react-router';
import AI from "./AI";
import DashboardPage from './components/DashboardPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <HashRouter>
      <Link to="/Dashboard"> Dashboard</Link> |
      <Link to="/AI"> AI</Link> |


      <Routes>
        <Route path ="/" element ={<Navigate to="/Dashboard"/>}/>
        <Route path ="/AI" element ={<AI/>}/>

        <Route path ="/Dashboard" element ={ <Dashboard/>}/>

    </Routes>
    </HashRouter>
  )
}

export default App;
