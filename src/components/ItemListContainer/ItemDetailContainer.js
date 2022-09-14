
import { pedirDatos } from "../../helpers/pedirDatos";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [item, setItem ] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading (true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })
            .catch(err => console.log(err))
            .finally (()=>{
                setLoading(false)
            })
    }, [itemId])

    return (
        <div>
        {
            loading
            ? <h2>Cargando...</h2>
            : <ItemDetail item={item}/>
        }
        </div>
    )

}

export default ItemDetailContainer