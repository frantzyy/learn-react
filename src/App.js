import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


// original component from create-react-app
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to InsProf Torch React</h1>
        </header>
        <p className="App-intro">
        insprof-torch-react: a simple reference app using react and redux.
        </p>
      </div>
    );
  }
}


// class component
// class App extends Component {

//     render() {
//         return (
//           <h1>Hello World Chris! from Class Component</h1>
//         );
//     }
// }


// stateless function component
// const App = () => <h1>Hello World Chris! from Stateless Function Component</h1>

export default App
