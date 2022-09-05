import { Link } from "react-router-dom"


const Item = ({producto}) => {

    return (
        <div className="Item">
            <h4>Linea {producto.linea}</h4>
            <img className="ItemImg" alt="colchon" src={producto.img} />
            <h3>Modelo: {producto.nombre}</h3>
            <p>Precio : ${producto.precio}</p>
            <p>Stock disponible{producto.stock}</p>
            <p>{producto.des} </p>
            <Link to={`/item/${producto.id}`}  className="btn btn-outline-primary">Ver mas</Link>
        </div>
    )
}

export default Item
