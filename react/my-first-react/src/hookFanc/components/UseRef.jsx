import React, {useRef, useEffect} from 'react'
import { useState } from 'react'

export default function Component2() {
      const prevInput = useRef('')
      const [inputValue, setInputValue] = useState('')
      
      useEffect(()=> {
            console.log(1,prevInput);
            console.log(2,prevInput.current);
            prevInput.current = inputValue}, [inputValue])
      console.log(prevInput.current);

      const hendelChange =(e)=>{
            setInputValue(e.target.value)
      }
    return(<div>
     
<input type="text" onChange={hendelChange} value={inputValue}/>
<hr />
prevInput {prevInput.current}
          <div></div>
          inputValue {inputValue}
    </div>
  
    )
  }