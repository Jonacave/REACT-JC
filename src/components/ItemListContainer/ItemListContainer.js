import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";




const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { lineaId } = useParams()
    console.log(lineaId)


    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (!lineaId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((prod) => prod.linea === lineaId))
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
            {<NavBar />}
            {

                loading ? <h2>Cargando...</h2>
                    : <ItemList productos={productos} />
            }

        </div>

    )

}

export default ItemListContainer