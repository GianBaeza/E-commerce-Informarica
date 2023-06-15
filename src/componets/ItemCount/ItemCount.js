import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd})=> {

    const [quantity, setQuantity] = useState(initial)

    //Incremento//
    const increment =()=>{
        
        if(quantity < stock){
            setQuantity(quantity + 1);
        }
    }

    //Decrementar//

    const decrement = ()=>{

        if(quantity > 1){
           setQuantity(quantity - 1)

        }  
    }



    return(
        //Button incrementar y decrementar el producto//
        <div className="Counter">

            <div className="Controls">
                <button className="Button" onClick={decrement}>-</button>

                <h4 className="Number">{quantity}</h4>
            
                <button className="Button" onClick={increment}>+</button>
            </div>

                                    
            <div>
                                                              
                
             <button className="Button" onClick={() => onAdd(quantity)} disabled ={!stock} > Agregar al carrito </button>

            </div>

            
            


        </div>
        
    )
}

export default ItemCount;
//Agregar al carrito// 
////si no hay stock no se ejecura, por eso la validacion de stock//