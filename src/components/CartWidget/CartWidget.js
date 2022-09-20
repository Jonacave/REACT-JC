
import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import {Link} from 'react-router-dom'
import { CartContext } from "../../CartContext/CartContext";
// import './CartWidget.scss '


const CartWidget = () => {

    const {cartQuantity, cart} = useContext(CartContext)

    return (
        <Link to="/cart" className={`widget ${cart.length > 0 ? 'widget-visible' : ''} `} >
                <BsCart4/>
                <span>{cartQuantity()}</span>
        </Link>
    )

}

export default CartWidget