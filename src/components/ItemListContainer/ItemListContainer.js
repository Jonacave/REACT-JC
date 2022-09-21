import { useEffect, useState } from "react"
// import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import Loader from "../Loader/Loader";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { lineaId } = useParams()



    useEffect(() => {
        setLoading(true)
        //1ero - armar referencia de collecion  de que base de datos (sync)
        const productosRef = collection(db, 'productos')
        const q = lineaId
                    ? query(productosRef, where('linea', '==', lineaId), limit(1))
                    : productosRef
        // 2dp paso - consumir esa referencia (async)
    
        getDocs(q)
        .then((resp) =>{
            const productosDB = resp.docs.map( (doc)=> ({id: doc.id, ...doc.data() } ))
            console.log(productosDB )

            setProductos (productosDB)
        } )
        .finally (() =>{
            setLoading(false)
        })


        //CODIGO PARA PEDIR DATOS DE FORMA LOCAL
        // pedirDatos()
        //     .then((res) => {
        //         if (!lineaId) {
        //             setProductos(res)
        //         } else {
        //             setProductos(res.filter((prod) => prod.linea === lineaId))
        //         }

        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    }, [lineaId])



    return (
        <div>
            {<NavBar />}
            {
                loading ?
                <Loader/>
                : <ItemList productos={productos} />
            }

        </div>

    )

}

export default ItemListContainer