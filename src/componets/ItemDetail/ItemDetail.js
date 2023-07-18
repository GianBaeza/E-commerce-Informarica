import { useState, useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { Link } from "react-router-dom";
import CartContext from '../Context/CartContext'



const ItemDetail = ({id, name, img, category, description, price, stock}) =>{

    const [quantityAdded, setQuantityAdded] = useState(0)


    const {addProducts} =  useContext(CartContext)

    const handleOnAdd = (quantity) =>{
    
        setQuantityAdded(quantity)
        
        const products ={
            
            id,name,price,img

        }
        addProducts(products, quantity);
    }
    


    return(

        <article className="CardDetail">

            <div className=" Detail">
            
                <header className="HeaderDetail">

                    <h2 className="DetailH">
                        {name}
                    </h2>

                </header>

                    <picture>

                        <img src={img} alt={name} className="ImgDetail"></img>

                    </picture>

                    <section className="SeccionInfo">
                        <p className="InfoDD">
                            Categoria: {category}

                        </p>

                        <p className="InfoD"> 
                             Descripcion: {description}
                        
                        </p>

                        <p className="InfoDD">
                            Precio ${price}
                        
                        </p>
                
                    </section>

                    <footer className="ItemFooter">
                        {
                            quantityAdded > 0 ?(<Link to='/cart' className="Option">Terminar compra</Link>) : (<ItemCount initial={1}  stock={stock} onAdd={handleOnAdd}/>)

                        }
                           

                    </footer>
            </div> 

            <div className="Volver">
                <Link className="Volver" to={'/'}> <button className="V">Volver atras</button>  </Link>
            </div>   

            
        </article>

        
 
        
    )
}

export default ItemDetail;