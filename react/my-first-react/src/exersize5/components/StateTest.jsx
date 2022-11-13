import React, { Component } from 'react';

class StateTest extends Component {
    constructor(props) {
        super(props);

        this.changeState.bind(this);
    }


    state = { name: 'old' }

    changeState() {
        this.setState({ name: 'new' })
    }
    render() {
        this.changeState()
        return (

            <h1>{this.state.name}</h1>
        );
    }
}

export default StateTest;