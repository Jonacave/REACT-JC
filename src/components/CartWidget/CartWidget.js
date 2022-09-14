
import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import {Link} from 'react-router-dom'
import { CartContext } from "../../CartContext/CartContext";

const CartWidget = () => {

    const {cartQuantity } = useContext(CartContext)

    return (
        <Link to="/cart">
                <BsCart4/>
                <span>{cartQuantity()}</span>
        </Link>
    )

}

export default CartWidget