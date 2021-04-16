
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Addservice from './components/Dashboard/Addservice/Addservice';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/addService">
            <Addservice></Addservice>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
