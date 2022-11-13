import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }
   
    render() { 
        return  <input placeholder='input0' ref={this.props.createRef}  type="text" /> ;
    }
}
 
export default Input;