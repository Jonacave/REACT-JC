import ItemCount from '../../components/ItemCount/ItemCount';
import { Link } from "react-router-dom"

import { useState } from 'react';
import { useCartContext } from '../../CartContext/CartContext';

const ItemDetail = ({ item }) => {

    const { cart, addToCart, isInCart } = useCartContext()
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)


    const handlerAgregar = () => {
        const itemToCart = {
            id: item.id,
            img: item.img,
            modelo: item.nombre,
            precio: item.precio,
            cantidad: cantidad
        }

        console.log(isInCart(item.id))
        addToCart(itemToCart)
    }

    // ver condicional para stock con algun IF, mostra detalles pero no los botones.
    return (
        <div className="ItemDetail">
            <h4>Linea {item.linea}</h4>
            <img className="ImgDetail" alt="colchon" src={item.img} />
            <h3>Modelo : {item.nombre}</h3>
            <p>Precio : ${item.precio * cantidad}</p>
            <p>Stock disponible{item.stock}</p>
            <p>{item.des}</p>


            {
                isInCart(item.id)
                    ? <Link to='/cart' className="btn btn-outline-primary"> Terminar compra</Link>
                    : <ItemCount
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handlerAgregar={handlerAgregar}
                        />
            }





        </div>
    )
}

export default ItemDetail