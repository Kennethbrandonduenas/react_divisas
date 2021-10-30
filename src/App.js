import './App.css';
import React, {useState,useEffect} from 'react'
import { BrowserRouter as Router, Route , Redirect, Switch } from 'react-router-dom';

//public
import Dashboard from './pages/dashboard/dashboard'


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/dashboard"><Dashboard/></Route>
          <Route exact path="/"><Redirect to="/dashboard" /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
