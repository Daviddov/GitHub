import React  from 'react'
class Name extends React.Component {
    constructor(props) {
        super(props);
       
    }
   
    render() { 
        const {name, lname, person} = this.props
        console.log(this.props);
        return (
            <h1>My name is {name} {lname} </h1>
          );
    }
}
 
export default Name;