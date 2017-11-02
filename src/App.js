import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Widget from './components/Widget';
import Heart from './components/Heart';
import Stateless from './components/Stateless';
import Title from './components/Title';

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
      txt: 'this is the state text',
      currentEvent : '---'
    };
    this.update = this.update.bind(this);
  }

  update(event){
    this.setState({txt: event.target.value})
    this.setState({currentEvent: event.type})
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
          <div> 
            <textarea 
              onKeyPress={this.update}  
              onCopy={this.update}  
              onPaste={this.update} 
              onFocus={this.update}
              onBlur={this.update}
              onDoubleClick={this.update}
              //plus touch events if you want
              cols="30" 
              rows="10"/>
            <h1>{this.state.currentEvent}</h1> 
          </div>      
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



export default App
