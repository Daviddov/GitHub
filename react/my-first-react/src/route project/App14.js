import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Info from './components/pages/Info';
import Error from './components/pages/Error';
import Login from './components/pages/Login';


function App() {
  const [user, setUser] = useState({})
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
          <Route path='Login' element={<Login />}>
          <Route path='Info' element={<Info />} /> 
          <Route path='*' element={<Error />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;