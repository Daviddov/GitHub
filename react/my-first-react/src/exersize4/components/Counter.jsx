import React,{Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);    
    }
    
    state = { display: 0 }
inc = () => {
    this.setState({ 
        display: this.state.display + this.props.id
    } )
}
dec = () => {
    this.setState({ 
        display: this.state.display - this.props.id
    } )
}
rst = () => {this.setState({ 
    display: 0
} )}

    render() { 
       
        return ( 
            
            <React.Fragment>
             <div style={{
                display : 'inline-block', 
                textAlign: 'center', 
                margin: 15,
                padding: 10,
                backgroundColor : 'lightgreen'
                }}>  
<span> Counter #{ this.props.id }</span><br />

<span> { this.state.display } </span><br />
<button onClick={()=>this.inc()}>INC</button>
<button onClick={()=>this.dec()}>DEC</button>
<button onClick={()=>this.rst()}>RST</button>
</div> 
            </React.Fragment>
         );
    }
}
 
export default Counter;