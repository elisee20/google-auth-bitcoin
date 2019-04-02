import React, { Component } from 'react';
import Auth from "./screens/Auth"
import Bitcoin from "./screens/Bitcoin"
import { BrowserRouter as Router, Route } from "react-router-dom";


import './App.css';

class App extends Component {
  render() {
    return (

      <Router>
      <div>
      <Route exact path="/" component={Auth}/>
      <Route  path="/bitcoin" component={Bitcoin}/>
      </div>
    </Router>
    );
  }
}

export default App;
