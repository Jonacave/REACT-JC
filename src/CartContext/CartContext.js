import { createContext, useContext } from "react";
import { useState } from 'react';
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
            // return (
                 //    isInCart(item.id)
                 //    ? console.log (item.cantidad)
                //    : 
                setCart([...cart, item])
             // )
        // }
        
        // if (!isInCart(item.id)) {
        //     setCart([...cart, item])
        // } else {
        //     console.log(itemRepetido.cantidad)
        //     const itemRepetido = cart.find(prod => prod.id === item.id)
        //     itemRepetido.cantidad + item.cantidad > item.stock ? (itemRepetido.cantidad = item.stock) : itemRepetido.cantidad += item.cantidad
        //     const newCart = cart.filter(prod => prod.id !== item.id)
        //     setCart([...newCart, itemRepetido])
        // }

    }




    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const emptyCart = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "pensalo bien...",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    setCart([])
                )
            }
        })
    }

    const terminarCompra = (id) => {
        Swal.fire({
            title: 'Tu comprar fue realizada con exito!',
            text: `Tu número de orden es: ${id}`,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Gracias por tu compra!'
        })
        setCart([])
    }



    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
            terminarCompra

        }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCartContext = () => {
    return useContext(CartContext)
}