import { Link } from 'react-router-dom';
import CartContext from '../Context/CartContext';
import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'






const Cart = () => {
    const { cart, totalQuantity, totalPrice } = useContext(CartContext);


    if (totalQuantity() === 0) {
        return (
            <div className='container'>
                <h1 className='containerH1'> No hay Productos en el carrito </h1>
                <Link to='/' className='OptionP'> <span className="material-symbols-outlined">
                    arrow_back
                </span>  </Link>
            </div>
        )
    }

    return (
        <div className='Container2'>
            {
                cart.map(products => <CartItem key={products.id} products={products} />)
            }
            <div className='container-total'>
                <p className='Total'>
                    Total: {totalPrice()}
                </p>
                <button className='finalizarCompra'> Finalizar Compra </button>
            </div>
            

        </div>
    )




}

export default Cart;