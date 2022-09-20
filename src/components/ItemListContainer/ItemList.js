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
                
                // {productos.map((prod) => {
                //     if (prod.stock > 0 ) {
                //         return <Item producto={prod} key={prod.id} />
                //     } else {
                //         return null
                //     }
                })}
                
            </div>
        </div>
    )
}

export default ItemList