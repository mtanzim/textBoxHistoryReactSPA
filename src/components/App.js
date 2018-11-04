import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import AppRouter from './AppRouter';

class App extends Component {

  render() {
    return (
      <div className="App container">
        <Header/>
        <Home/>
        {/* <AppRouter/> */}
      </div>
    );
  }
}

export default App;