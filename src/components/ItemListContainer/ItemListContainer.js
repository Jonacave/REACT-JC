import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const [productos, SetProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                SetProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                console.log("fin del proceso")
            })
    }, [])

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )

}

export default ItemListContainer