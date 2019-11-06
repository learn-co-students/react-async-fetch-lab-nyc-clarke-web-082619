// create your App component here

import React from 'react';
export default class App extends React.Component{

    state = { 
        astronauts: []
    }


    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {this.setState({astronauts: data})})
    }
    render(){
        return (
            <div>

            </div>
        )
    }
}