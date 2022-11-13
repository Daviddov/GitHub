import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {

    const [fnameValue, setFnameValue] = useState()
    const [passwordValue, setPasswordValue] = useState()
    const navigate = useNavigate()
    const user = {
        name: fnameValue,
        password: passwordValue
    }
    const [data, setData] = useState()
    
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json();
        console.log(json)
        setData(json)
    }
    useEffect(fetchData(), [])
    
    const hendleInput = (e) => {
        const { name, value } = e.target
        name === 'fname' ? setFnameValue(value) : setPasswordValue(value);
    }

    const hendleSubmit = (e) => {
        e.preventDefault()
        if (user.name && user.password) {
            data.forEach(element => {
                if (element.name === user.name) {console.log(' name is ok'); }
                
            });

            
        }
        setUser(user)
        navigate('/')

    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={hendleSubmit}>
                <input onChange={hendleInput} value={fnameValue} type="text" placeholder="Name" name="fname" />
                <input onChange={hendleInput} value={passwordValue} type="password" placeholder="password" name="password" />
                <input type="submit" />
            </form>
        </div>

    );
}

export default Login;