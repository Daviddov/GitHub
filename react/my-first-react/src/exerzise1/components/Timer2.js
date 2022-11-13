import React from "react";
class Timer2 extends React.Component {
   constructor(){
    super()
    this.state = {date: new Date, x:1};
   }
    yx = setInterval(() => {
    this.setState( {date:new Date()} )
   }, 1000);
   render() {
    return (
      <div>
        <h2>The time is</h2>
        <h2>{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Timer2
