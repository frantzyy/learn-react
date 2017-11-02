import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Widget from './components/Widget';
import Heart from './components/Heart';
import Stateless from './components/Stateless';
import Title from './components/Title';
import Textarea from './components/Textarea';

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
      a : '',
      b : '',
      c : '',
      d : ''
    };
    this.update = this.update.bind(this);
  }

  update(event){
    this.setState({
        txt: event.target.value,
    a: this.refs.a.value, //basic way to use ref
    b: this.b.value, //using a callback
    c: ReactDOM.findDOMNode(this.c).value, //using component
    d: this.d.refs.inputSpecial.value //using component with a ref, helpful when nodes are wrapped and you need access
    }) 
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
          <Textarea />
          <div>
            <input 
              ref="a" //basic way to use ref
              type="text"
              onChange={this.update.bind(this)} />
            State.a: {this.state.a}
            <hr/>
            <input 
              ref={node => this.b = node} //using a callback
              type="text"
              onChange={this.update.bind(this)} />
            State.b: {this.state.b}
            <hr/>
            <InputSpecial
              ref={component => this.c = component} //using a component
              update={this.update.bind(this)} />
            State.c: {this.state.c}
            <hr/>
            <InputSpecial
              ref={component => this.d = component}  //using a component with a ref
              update={this.update.bind(this)} />
            State.d: {this.state.d}
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

class InputSpecial extends Component {
    render(){
     return <input ref="inputSpecial" type="text" onChange={this.props.update} />
    }
}


export default App
