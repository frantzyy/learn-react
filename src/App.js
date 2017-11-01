import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';


// original component from create-react-app
// class App extends Component {
//   render() {

//     let txt = this.props.txt
   
//     return (  
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to InsProf Torch React</h1>
//           <p>{txt}</p>
//         </header>
//         <p className="App-intro">
//         insprof-torch-react: a simple reference app using react and redux.
//         </p>
//       </div>
//     );
//   }
// }


// class component
class App extends Component {

    render() {
      let txt = this.props.txt

      return (
        <div>
          <h1>Hello World Chris! from Class Component</h1>
          <p>{txt}</p>
        </div>
       );
    }
}

App.propTypes = {
  txt:  PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt : 'this is the default txt'
}

// stateless function component
// const App = () => <h1>Hello World Chris! from Stateless Function Component</h1>

export default App
