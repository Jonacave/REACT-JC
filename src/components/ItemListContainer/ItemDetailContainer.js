
// import { pedirDatos } from "../../helpers/pedirDatos";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";
import {doc, getDoc} from "firebase/firestore" 
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {

    const [item, setItem ] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
    

    useEffect(() => {
        setLoading (true)
        // 1ero armo la referencia (sync)
        const docRef = doc(db, 'productos', itemId)

        //2do llamo a la DB (async)
        getDoc(docRef)
        .then ((doc) =>{
            setItem({id: doc.id, ...doc.data()})
        })
        .finally(()=>{
            setLoading(false)
        })

        // ESTE CODIGO ES PARA RENDERIZAR LOS ITEM CON EL ID DE FORMA LOCAL
        // pedirDatos()
        //     .then((res) => {
        //         setItem(res.find((prod) => prod.id === Number(itemId)))
        //     })
        //     .catch(err => console.log(err))
        //     .finally (()=>{
        //         setLoading(false)
        //     })
    }, [itemId])
  
    return (
        <div>
        {
            loading
            ? <Loader/>
            : <ItemDetail item={item}/>
        }
        </div>
    )

}

export default ItemDetailContainer