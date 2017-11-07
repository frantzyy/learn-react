import React, {Component} from 'react';
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

// original component from create-react-app class App extends Component {
// render() {     let txt = this.props.txt     return (       <div
// className="App">         <header className="App-header">           <img
// src={logo} className="App-logo" alt="logo" />           <h1
// className="App-title">Welcome to InsProf Torch React</h1>
// <p>{txt}</p>         </header>         <p className="App-intro">
// insprof-torch-react: a simple reference app using react and redux.
// </p>       </div>     );   } } class component
class App extends Component {

  constructor() {
    super();
    this.state = {
      txt: 'this is the state text',
      val: 0,
      increasing: false,
      items: []

    };
    this.update = this
      .update
      .bind(this);
  }

  update(event) {
    this.setState({
      // txt: event.target.value,
      val: this.state.val + 1
    })
  }

  updateAndRender(event) {
    ReactDOM.render(
      <App val={this.props.val + 1}/>, document.getElementById('a'))
  }

  componentWillMount() {
    console.log('componentWillMount');
    // this.setState({m: 2}) //intercept state before render

    fetch('https://swapi.co/api/people/?format=json').then(response => response.json())
    // .then(response => response.results)
      .then(({results: items}) => this.setState({items}))

  }

  componentDidMount() {
    console.log('componentDidMount');
    // this.inc = setInterval(this.update, 500)

  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    // clearInterval(this.inc)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      increasing: nextProps.val > this.props.val
    })
  }

  // state will still be updated but will not render until this returns true
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps: ' + prevProps.val);
  }

  filter(e) {
    this.setState({filter: e.target.value})
  }
  render() {
    console.log('render');
    console.log('this.state.increasing: ' + this.state.increasing);

    let txt = this.props.txt;
    let items = this.state.items;

    if (this.state.filter) {
      items = items.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }

    return (
      <div>
        <Title text="whoohoo!"/>
        <h1>Hello World Chris! from Class Component</h1>
        <Stateless/>
        <p>{txt}</p>
        <input type="text" onChange={this
          .update
          .bind(this)}/>
        <p>State.txt: {this.state.txt}</p>
        < Widget update={this
          .update
          .bind(this)}/>
        <Button>I
          <Heart/>
          Surfing</Button>
        <Textarea/>
        <Inputs/>
        <br/>
        <button onClick={this.update}>Learning about life cycle hooks: {this.state.val * this.state.m}</button>
        <br/>
        <button onClick={this
          .updateAndRender
          .bind(this)}>Learning about more life cycle hooks (every 5 clicks it renders): {this.props.val}</button>
        <br/>
        Filter starwars peeps:
        <input type="text" onChange={this
          .filter
          .bind(this)}/>
        <br/>
        <table>
          <tr>
            <td>
              <p>Using the no component:</p>
              {items.map(item =><h4 key = {
                item.name
              } > {
                item.name
              } </h4>)}
            </td>
            <td>
              <p>Using the Person component:</p>
              {items.map(item =>< Person key = {
                item.name
              }
              person = {
                item
              } />)}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

App.propTypes = {
  txt: PropTypes.string,
  // cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default txt',
  val: 0
}

class Wrapper extends Component {
  mount() {
    ReactDOM.render(
      <App/>, document.getElementById('a'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return (
      <div>
        <button onClick={this
          .mount
          .bind(this)}>Mount</button>
        <button onClick={this
          .unmount
          .bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default Wrapper
