import React from 'react';

class ButtonChildren extends React.Component {
    render(){
        return (
            <Buttons>
                <button value="a">Aaaaaaa</button>
                <button value="b">Bbbbbbb</button>
                <button value="c">Ccccccc</button>
            </Buttons>

        )
    }
}

class Buttons extends React.Component {
    constructor(){
        super()
        this.state = {
            selected : 'None'
        }
    }

    selectItem(selected) {
        this.setState({selected});
    }

    render(){
        console.log('hello from ButtonChildren')

        //this is extending by creating a new element and adding the onClick
        let fn = child =>
            React.cloneElement(child, {
                onClick: this.selectItem.bind(this, child.props.value)
            });

        let items = React.Children.map(
            this.props.children, fn);
    
        return (
            <div>
                <h2>You have selected: {this.state.selected}</h2>
                {items}
            </div>
        )
    }
}



export default ButtonChildren;