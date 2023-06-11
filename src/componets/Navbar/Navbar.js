//import
import CarritoIcons from "./CarritoIcons";
import logo from "./Img/GB-1.png";
import "./Navbar.css";






function Navbar(){
    return(
        <header className="NavContainer">

            <nav className="Nav">

                <div className="divlogo">

                    <a className="Logo" href="#"><img src={logo} className="logo" alt="logo"/></a>

                </div>

                <ul className="NavList">
                    
                    <li>

                        <a className=" List" href="#">Inicio</a>

                    </li>
                    <li>
                        <a className=" List" href="#">Contacto</a>

                    </li>
                    <li>

                         <a className=" List" href="#">Productos</a>
                                             
                    </li>
                    <li>

                        <a className=" List" href="#"><CarritoIcons/></a>

                    </li>
                    
                        
            
                </ul>


            </nav>

        </header>
    )
        

}

export default Navbar;