import { useContext } from "react"
import CartContext from "../Context/CartContext"
import { Link } from "react-router-dom"
import './CartWidget.css'



const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className="CartWidget">

            <span class="material-symbols-outlined">local_mall</span>
            <span>{totalQuantity() || '' }</span>
            
            





        </Link>
    )
}

export default CartWidget;