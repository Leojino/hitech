import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Home from './components/Home.js';

class App extends Component {
  render() {
    return (
      // <Router>
      //   <div>
      //     <Route exact path="/" component={Home}/>
      //   </div>
      // </Router>
      <Home/>
    );
  }
}

export default App;