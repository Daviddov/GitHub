import React, { Component } from 'react'
class NumKey extends Component {
    constructor(props) {
        super(props);

        this.changeState.bind(this);
    }
    id = this.props.id

    state = {name:'old'}

    changeState(){
        this.setState({name: 'new'})
    }

    render() {
        return (
            <button
                id={this.props.id}
                style={{
                    margin: 5,
                    fontSize: 40,
                    width:'30%'
                }}
                onClick={(e) => this.props.clickHendeler(this.props.id)} >
                {this.props.id}

            </button>
            
        );
        
    }
}

export default NumKey;