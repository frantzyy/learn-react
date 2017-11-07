import React from 'react';

class Starwars extends React.Component {

    constructor() {
        super();
        this.state = {
          items: []
        };
      }

    componentWillMount() {
        console.log('componentWillMount');
       
        fetch('https://swapi.co/api/people/?format=json').then(response => response.json())
        // .then(response => response.results)
          .then(({results: items}) => this.setState({items}))
    
      }

      filter(e) {
          console.log(e);
        this.setState({filter: e.target.value})
      }

    render() {

        let items = this.state.items;
        
        if (this.state.filter) {
            items = items.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
        }

        return (
        <div>
            Filter starwars peeps:
            <input
                type="text"
                onChange={this.filter.bind(this)}/>
            <br/>
            <table>
                <tbody>
                <tr>
                    <td>
                        <p>Using the no component:</p>
                        {items.map(item =>< h4 key = {
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
                </tbody>
            </table>
        </div>
        )
    }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default Starwars