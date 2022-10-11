
import { useCartContext } from "../../CartContext/CartContext"
import { BsTrash } from 'react-icons/bs'
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

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
                <div key={item.id}>
                    <h3>{item.modelo}</h3>
                    <img className="ImgCar" alt="colchon" src={item.img} />
                    <p>Precio: {item.precio * item.cantidad}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger mx-5"><BsTrash /></button>
                    <hr />
                </div>
            ))}

            <h3>Total: $ {cartTotal()}</h3>
            <button onClick={emptyCart} className="btn btn-primary my-2"> Vaciar carrito</button>
            <Link className="btn btn-success my-2" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Cart