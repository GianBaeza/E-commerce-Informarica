//import
import CarritoIcons from "./CarritoIcons";
import logo from "./Img/GB-1.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";






function Navbar(){
   
    return(
        
        <nav className="NavBar">

            <Link to= '/'>
             <a className="Logo" to="/"><img src={logo}  alt="logo"/></a>
            </Link>

            <div className="Categories">

               <Link to= {`/category/Mouse`} className=  {({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mouse</Link>
               <Link to= {`/category/Teclado`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Teclado</Link>
               <Link to= {`/category/Monitor`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Monitor</Link>

            </div>
            <CarritoIcons/>
                
        </nav>
           
        
    )
        

}

export default Navbar;