import { createContext} from "react";
import { useState } from "react";
import React from "react";
import { act } from "react-dom/test-utils";





const CartContext = createContext();
export default CartContext;


export function CartProvider ({ children }){
    

    const [cart, setCart] = useState([])
    console.log(cart)

   

    const addProducts = (products, quantity) => {
        if (!isInCart (products.id)) {
            setCart(prev => [...prev, { ...products, quantity }])

        } else {
            console.error('agregado')
        }
    }

    const removeProducts = (id) => {
        const cartUpdated = cart.filter(products => products.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (itemId) =>{
        return cart.some(products => products.id === itemId)
    }

    const totalPrice = () =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }


    const totalQuantity = ()=>cart. reduce((acumulador, productsActual)=> acumulador + productsActual.quantity, 0);

    
    return(
        <CartContext.Provider value ={{
            addProducts,
            removeProducts,
            clearCart,
            totalQuantity,
            totalPrice,
            cart
                
            }}>
            { children }
        </CartContext.Provider>
    )


}


    