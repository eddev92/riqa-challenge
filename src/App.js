import React, { Component } from 'react';
import Dashboard from './components/dashboard';
import MenuComponent from './components/shared/menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MenuComponent />
          <Dashboard />
      </div>
    );
  }
}

export default App;
