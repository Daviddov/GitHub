import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


export default function UseState({text}) {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(()=>{
        console.log('somthing change, alrady build DOM ');
      
    },[count])
    
    useEffect(()=>{

        console.log('created');
        return ()=> {console.log('unmount')}
    },[])


    return (<>
         <div>{text}</div>
         <h1>{count}</h1>
         <button onClick={() => setCount(count +1)}>+</button>
       
         <h1>{count2}</h1>
         <button onClick={() =>setCount((prev)=> prev + 5)}>+5</button>
       
     </>);
}
