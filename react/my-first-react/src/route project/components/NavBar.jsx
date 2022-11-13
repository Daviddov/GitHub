import { NavLink } from "react-router-dom";

function NavBar() {
    return ( <nav>

 <NavLink to='/'>Home</NavLink>
 <NavLink to='/Info'>Info</NavLink>
 <NavLink to='/Login'>Login</NavLink>
    </nav>
     );
}

export default NavBar;