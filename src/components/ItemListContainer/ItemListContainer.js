import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom';
import Loader from "../Loader/Loader";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { lineaId } = useParams()


    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'productos')
        const q = lineaId
            ? query(productosRef, where('linea', '==', lineaId), limit())
            : productosRef

        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [lineaId])

    return (
        <div>
            {
                loading ?
                    <Loader />
                    : <ItemList productos={productos} />
            }
        </div>
    )
}

export default ItemListContainer