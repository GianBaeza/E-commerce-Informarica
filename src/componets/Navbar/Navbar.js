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
                    
                    <li className="NavList">

                        <a className=" List" href="#">Inicio</a>

                    </li>
                    <li className="NavList">

                        <a className=" List" href="#">Contacto</a>

                    </li>
                    <li className="NavList">


                        <div class="dropdown">
                         <a className="List" href="">Productos</a>
                            <div class="dropdown-content">
                               <ul>
                                   <li className="NavList">

                                       <a className= "List" href="">Teclados</a>

                                   </li>

                                   <li className="NavList">
                                       <a className= "List" href="">Mouse</a>

                                   </li>

                                   <li className="NavList">

                                       <a className= "List" href="">Monitor</a>


                                   </li>
        
                               </ul>
                            </div>
                       </div>                       

                                                    
                    </li>                         
                    
                    <li className="NavList">

                        <a className=" List" href="#"><CarritoIcons/></a>

                    </li>
                    
                        
            
                </ul>


            </nav>

        </header>
    )
        

}

export default Navbar;