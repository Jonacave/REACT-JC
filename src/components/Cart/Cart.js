
import { useCartContext } from "../../CartContext/CartContext"
import { BsTrash } from 'react-icons/bs'
import { Link } from "react-router-dom"
// import { counter } from "@fortawesome/fontawesome-svg-core"


const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem} = useCartContext()

    if (cart.length === 0) {
        return (
            <div className="ItemDetail">
                <h2> Tu carrito está vacío </h2>
                <Link to="/" className="btn btn-primary">Ir a comprar</Link>
            </div>
        )
    }



   
    return (
        <div className="ItemDetail">
            <h2>Productos en el carrito</h2>
            <hr />
            {cart.map((item) => (
                // ${if (item.cantidad == 0) { } }
                <div key={item.id}>
                    <h3>{item.modelo}</h3>
                    <img className="ImgCar" alt="colchon" src={item.img} />
                    <p>Precio: {item.precio * item.cantidad}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger mx-2"><BsTrash /></button>
                    <hr />
                </div>
            

            ))}
            <h3>Total: $ {cartTotal()}</h3>
            <button onClick={emptyCart} className="btn btn-primary"> Vaciar carrito</button>
        </div>
        
    )  
} 

export default Cart