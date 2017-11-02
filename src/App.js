import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Widget from './components/Widget';
import Heart from './components/Heart';
import Stateless from './components/Stateless';

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

  constructor(){
    super();
    this.state = {
      txt: 'this is the state text'
    }
  }

  update(event){
    this.setState({txt: event.target.value})

  }

    render() {
      let txt = this.props.txt

      return (
        <div>
          <Title text="whoohoo!"/>
          <h1>Hello World Chris! from Class Component</h1>
          <Stateless />
          <p>{txt}</p>
          <input type="text" onChange={this.update.bind(this)} />
          <p>State.txt: {this.state.txt}</p>
          < Widget update={this.update.bind(this)} />
          <Button>I <Heart/> Surfing</Button>         
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

const Title = (props) => 
  <h1>Title: {props.text}</h1>

Title.propTypes = {
  // text : PropTypes.string.isRequired

  //custom validation
  text(props, propName, component) {
    if(!(propName in props) ){
      return new Error('missing ${propName}')
    }

    if(props[propName].length < 6 ){
      return new Error('to short ${propName}')
    }
  }
}

export default App
