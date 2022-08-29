import Item from "./Item"

const ItemList = ({ productos = [] }) => {

    return (
        <div>
            <hr/>
            <h2>Productos</h2>
            <hr/>
            <div className="containerProductos">
                {productos.map((prod) => {
                    return <Item producto={prod} key={prod.id} />
                })}
            </div>
        </div>
    )
}

export default ItemList