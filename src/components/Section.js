import React from 'react';

class Section extends React.Component {
    
    componentWillMount() {
      console.log('hello from section!')
    }
  
    render() {
      return(
            <div>
                <p>Section example...........</p>
                
                <br />
            </div>
        )
    }
}

export default Section;