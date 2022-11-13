
import React, { Component } from 'react';

import Counter from './components/Counter'
 
// {
//     for (let i = 1; i < 7; i++) {
//         buttonsArray.push(<Counter key={i} id={i} />);
//     }
// }

class App4 extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
buttonsNum = [1,2,3,4,5,6,7];
    render() {


        return (
            <React.Fragment>
                {this.buttonsNum.map(num => <Counter key={num} id={num} />)}
            </React.Fragment >
        );
    }
}

export default App4;