import React, { Component } from 'react'
import NumKey from './components/NumKey';






class App5 extends Component {
    constructor(props) {
        super(props);
    }
    
    state = { display:0 }


    clickHendeler = (id) => {
        this.setState({display: this.state.display += id} )
    }
numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    render() {
        return (
            <React.Fragment>
                <div style={{ 
                    textAlign: 'center',
                    fontSize: 40,
                    width: 300 
                    }}>
                        {this.state.display}
                    <br />
                    {this.numArr.map(n =>
                         <NumKey clickHendeler={this.clickHendeler} key={n} id={n} />
                         )}
                    
                </div>

            </React.Fragment>
        );
    }
}

export default App5;