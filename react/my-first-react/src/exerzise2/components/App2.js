import NameFunc from "./NameFunc";
import "./app2.css"
import Name from "./Name";
const person1 = {name: 'David', lName : 'Bar'}
   



export default function App2() {
    return (
        <div>
          <Name name={'yos'} lname={'dar'}/>
          <NameFunc person={person1}/>
        </div>
    
      );
}