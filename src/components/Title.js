import React from 'react';

const Title = (props) => 
    <h1>Title: {props.text}</h1>

Title.propTypes = {
    // text : PropTypes.string.isRequired

    //custom validation
    text(props, propName, component) {
        if(!(propName in props) ){
            return new Error('missing ${propName}');
        }

        if(props[propName].length < 6 ){
            return new Error('to short ${propName}');
        }
    }
}

export default Title;