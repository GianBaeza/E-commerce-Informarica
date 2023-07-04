//import
import CarritoIcons from "./CarritoIcons";
import logo from "./Img/GB-1.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";






function Navbar(){
   
    return(
        
        <nav className="NavBar">

            <Link to='/' className="Logo">
              <img src={logo}  alt="logo" className="Logo"/>
            </Link>

            <div className="Categories">

               <NavLink to= {`/category/Mouse`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Mouse</NavLink>
               <NavLink to= {`/category/Teclado`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Teclado</NavLink>
               <NavLink to= {`/category/Monitor`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Monitor</NavLink>

            </div>
            <CarritoIcons/>
                
        </nav>
           
        
    )
        

}

export default Navbar;