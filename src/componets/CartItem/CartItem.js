import CartContext from '../Context/CartContext';
import React from 'react';
import { useContext } from 'react';
import './CartItem.css';



const CartItem = ({ products }) => {
    const { removeProducts} = useContext(CartContext)


    return (
        <div className='container'>
            <picture>

                <img src={products.img} alt={products.name} className="imgContainer"/>

            </picture>
            <div className='productsCategorie'>
                <h2>
                    {products.name}
                </h2>
                <p>
                    Cantidad: {products.quantity}
                </p>
                <p>
                    Subtotal: {products.quantity * products.price}
                </p>
                <button onClick={() => removeProducts(products.id)}>Eliminar</button>
                
            </div>
        </div>

    )
};

export default CartItem;

