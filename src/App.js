import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidenav from '../src/Sidenav/Sidenav'
import Router from '../src/Router/Router'

function App() {
  return (
    <div className="App">
      <Router>
      <Sidenav>
      </Sidenav>
      </Router>
    </div>
  );
}

export default App;
