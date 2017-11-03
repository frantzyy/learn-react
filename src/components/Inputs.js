
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Inputs extends React.Component {
    
    constructor(){
        super();
        this.state = {
            a : '',
            b : '',
            c : '',
            d : ''
        };
        this.update = this.update.bind(this);
    }

    update(event){
        this.setState({
            a: this.refs.a.value, //basic way to use ref
            b: this.b.value, //using a callback
            c: ReactDOM.findDOMNode(this.c).value, //using component
            d: this.d.refs.inputSpecial.value //using component with a ref, helpful when nodes are wrapped and you need access
        }) 
      }


    render() {
        return (


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
        )
    }
}

class InputSpecial extends Component {
    render(){
     return <input ref="inputSpecial" type="text" onChange={this.props.update} />
    }
}

export default Inputs