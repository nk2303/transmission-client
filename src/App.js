import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { api } from './src/services/api';
import Home from './src/containers/Home';
import SharedBrowser from './src/containers/SharedBrowser';

const App = () => {
  return (
      <Router>
        <Route exact path='/' render={(routeProps) => <Home {...routeProps} />} />
        <Route exact path='/:key' render={(routeProps) => <SharedBrowser {...routeProps} />} />
      </Router>
  );
}

export default App;


