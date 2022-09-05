import ItemCount from '../../components/ItemCount/ItemCount';
import { Link } from "react-router-dom"

const ItemDetail = ({ item }) => {
    return (
        <div className="ItemDetail">

            <h4>Linea {item.linea}</h4>
            <img className="ItemImg" alt="colchon" src={item.img} />
            <h3>Modelo: {item.nombre}</h3>
            <p>Precio : ${item.precio}</p>
            <p>Stock disponible{item.stock}</p>
            <p>{item.des}</p>
            <ItemCount />
            <Link to='/productos' className="btn btn-outline-primary">Volver al inicio</Link>

        </div>
    )
}

export default ItemDetail