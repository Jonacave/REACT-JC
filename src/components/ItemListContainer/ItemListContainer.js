import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "./ItemList"
import { Routes, Route, useParams } from 'react-router-dom';



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    const {lineaId} = useParams()
    console.log(lineaId)


    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (!lineaId) {
                    setProductos(res)
                } else {
                    setProductos (res.filter ((prod) => prod.linea === lineaId))
                }
    
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [lineaId])

    return (
        <div>
        {
            loading ? <h2>Cargando...</h2>
            : <ItemList productos={productos} />
        }
        </div>
    )

}

export default ItemListContainer