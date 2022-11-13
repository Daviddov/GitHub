import React from "react"

export function AlertButtom(props) {
    let myAlert = ['very good', 'try again']
    let mySwitch = 0
    return(
<React.Fragment>
    <button onClick={()=>{
    mySwitch === 0 ? mySwitch = 1 : mySwitch = 0;
        alert(myAlert[mySwitch])
    }}>Click me!</button>

    <button onClick={() => console.log(props.name)}>Click me!</button>
</React.Fragment>

    )
}
