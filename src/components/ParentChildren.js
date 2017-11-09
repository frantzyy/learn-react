import React from 'react';

class ParentChildren extends React.Component {
    render(){
        return (
            <Parent>
                <div className="childA"></div>
               
            </Parent>

        )
    }
}

class Parent extends React.Component {
    render(){
        console.log('hello from ParentChildren')

        //works if there is more than one children
        // let items = this.props.children.map(child => child)
        // console.log(items);

        //works always option 1
        // let items = React.Children.map(this.props.children, child => child);
        // console.log(items);

        //works always option 2
        // let items = React.Children.toArray(this.props.children)
        // console.log(items);

        //for each
        // let items = React.Children.forEach(
        //     this.props.children, child => console.log(
        //     child.props.className));
        // console.log(items);

        //return a single children only
        let items = React.Children.only(this.props.children);
        console.log(items);

        return <p>hello from ParentChildren</p>
    }
}



export default ParentChildren;