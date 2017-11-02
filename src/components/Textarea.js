
import React from 'react';

class Textarea extends React.Component {
    
    constructor(){
        super();
        this.state = {
        currentEvent : '---'
        };
        this.update = this.update.bind(this);
    }

    update(event){
        this.setState({currentEvent: event.type})
    }


    render() {
        return (
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
        )
    }
}

export default Textarea


     