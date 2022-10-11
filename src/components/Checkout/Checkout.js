import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../CartContext/CartContext"
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../../firebase/config"


const Checkout = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
        celular: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()


        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal(),
            fecha: new Date()
        }

        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }
        if (values.email.length < 2) {
            alert("Email incorrecto")
            return
        }

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))
        const productos = await getDocs(q)
        const outOfStock = []

        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            console.log(doc.id)
                            // setOrderId(doc.id)
                            terminarCompra(doc.id)
                        })
                })
        } else {
            alert("Hay articulos que no tienen stock disponible")
            console.log(outOfStock)
        }
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-4" >
            <h2> Enviar orden de Pedido </h2>

            <form onSubmit={handleSubmit}>
                <input
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'}
                    className="my-3 form-control"
                    placeholder="Ingrese su nombre"
                />

                <input
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'}
                    className="my-3 form-control"
                    placeholder="Email"
                />

                <input
                    name="direccion"
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={'text'}
                    className="my-3 form-control"
                    placeholder="Dirección"
                />

                <input
                    name="celular"
                    onChange={handleInputChange}
                    value={values.celular}
                    type={'text'}
                    className="my-3 form-control"
                    placeholder="Numero de celular"
                />

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout