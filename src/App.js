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
import Inputs from './components/Inputs';

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
      val: 0
     
    };
    this.update = this.update.bind(this);
  }

  update(event){
    this.setState({
        // txt: event.target.value,
        val: this.state.val + 1
    }) 
  }

  componentWillMount(){
    console.log('componentWillMount');
    // this.setState({m: 2}) //intercept state before render
  }

  componentDidMount(){
    console.log('componentDidMount');
    // this.inc = setInterval(this.update, 500)
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    // clearInterval(this.inc)
  }

    render() {
      console.log('render');

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
          <Inputs />
         <button onClick={this.update}>{this.state.val * this.state.m}</button>
        </div>
       );
    }
}

App.propTypes = {
  txt:  PropTypes.string,
  // cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt : 'this is the default txt'
}

class Wrapper extends Component{
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render(){
    return (
      <div>
          <button onClick={this.mount.bind(this)}>Mount</button>
          <button onClick={this.unmount.bind(this)}>UnMount</button>
          <div id="a"></div>
      </div>
    )
  }
}



export default Wrapper
