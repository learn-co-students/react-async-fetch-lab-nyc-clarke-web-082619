import React from 'react'

export default class App extends React.Component {
    constructor() {
        super();
        this.state={
            dataSet: []
        }
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp=> resp.json())
        .then(data => this.setState({
            dataSet: data
        }))
    }

    render(){
        return(
            <div>
            {this.state.dataSet.map((person, id)=> <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }
}