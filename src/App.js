import React from 'react'
import logo from './logo.svg';
import './App.css';
import './Employee/Home.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';

import Home from './Employee/Home.js';
import Add from './Employee/Add.js';
import Edit from './Employee/Edit.js';
import View from './Employee/View.js';
import About from './Employee/about.js';

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/home">Employee Management Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/home">Home </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/add">Add Employee</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route path="/home"><Home /></Route>
              <Route path='/home' render={(props) => <Home {...props} />} />
              <Route path="/add"><Add /></Route>
              <Route path="/about"><About /></Route>
              <Route path='/edit/:id' render={(props) => <Edit {...props} />} />
              <Route path='/view/:id' render={(props) => <View {...props} />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
