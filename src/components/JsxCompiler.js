import React from 'react';
import css from './JsxCompiler.css';

class JsxCompiler extends React.Component {

    constructor(){
        super()
        this.state = {
            err : 'oops!',
            input : 'enter jsx',
            output : ''
        }
    }
    update(e){
        let code = e.target.value;
        try {
            this.setState({
                output : window.Babel
                .transform(code, { presets: ['es2015', 'react']})
                .code, 
                err : ''
            })
        }catch(err){
            this.setState({err: err.message})
        }
    }

    render(){
      return (
        <div>
            <header>{this.state.err}</header>
            <div className="container">
            <textarea 
                onChange={this.update.bind(this)} 
                defaultValue={this.state.input}>
            </textarea>
            <pre>{this.state.output}</pre>
         </div>
  </div>
      )}
  }

  
export default JsxCompiler