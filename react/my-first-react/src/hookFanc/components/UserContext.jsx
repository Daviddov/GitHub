import { useState, createContext, useContext } from "react";


export default function Component1() {
  const [user, setUser] = useState("me");

  return (
    <UserContext.Provider value={user}>
      <Component2 />
    </UserContext.Provider>
  );
}

const UserContext = createContext();
function Component2() {
    const user = useContext(UserContext);
  return (
    <>
      <h1>2{user}</h1>
     
    </>
  );
}


