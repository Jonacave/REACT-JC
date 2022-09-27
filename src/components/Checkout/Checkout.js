import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../CartContext/CartContext"
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../firebase/config"


const Checkout = () => {
    // OPCION PARA CUANDO TENEMOS UNO O DOS IMPUT
    // const [nombre, setNombre] = useState('')
    // const handleNombre = (e) => {
    //     setNombre (e.target.value)
    // }

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

    const handleSubmit = (e) => {
        e.preventDefault()


        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }


        console.log("Submit del form")
        console.log(orden)

        const ordenesRef = collection(db, 'ordenes')
        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                terminarCompra(doc.id)
            })
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