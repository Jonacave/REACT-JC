import NavBar from "../NavBar/NavBar"
import Item from "./Item"

const ItemList = ({ productos = [] }) => {

    return (
        <div>
            <NavBar />
            <hr />
            <div className="containerProductos">
                {productos.map((prod) => {
                    return <Item producto={prod} key={prod.id} />
                })
                }
            </div>
        </div>
    )
}

export default ItemList