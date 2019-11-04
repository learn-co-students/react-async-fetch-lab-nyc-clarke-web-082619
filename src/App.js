// create your App component here

import React from 'react';

export default class App extends React.Component{
    state ={
        info: []
    }
    
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then(data => this.setState({info: data}))
    }

    render(){
        console.log(this.state.info)
    }
}
