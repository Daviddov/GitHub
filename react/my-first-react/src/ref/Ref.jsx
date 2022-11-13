import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class Ref extends Component {
    constructor(props) {
        super(props);
    }
//old way
    input2 = React.createRef()
// ===>
    input3  = (element) => {
        this.input3 = element
    }
//new way
    createRef = element => {
        this.input = element
    }

    focusHendle = () => {
        console.log(this.input2);
        this.input.focus()
        console.log(this.input1);
        console.log(this.input2.current.value);
        console.log(this.input3.value);
    }

    render() {
        return (
            <div>
                <input placeholder='input1' type="text" ref={(input) => this.input1 = input} />
                <input placeholder='input2' type="text" ref={ this.input2} />
                <input placeholder='input3' type="text" ref={ this.input3} />
                <Input createRef={this.createRef} />
                <Button onClick={this.focusHendle} />

            </div>
        );
    }
}

export default Ref;