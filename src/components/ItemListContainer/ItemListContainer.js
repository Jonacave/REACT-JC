
import Contador from "../ItemCount/ItemCount"
import { Saludo } from "./Saludo"


const LineaColchones = () => {

    return (
        <section className='menu'>
            <Saludo usuario="Jona"/>
            <ul>
                <h5>Linea de colchones</h5>
                <li>Line Exclusive</li>
                <li>Linea Resortes</li>
                <li>Linea Espuma</li>
                <li>Linea Stilo</li>
            </ul>
        <Contador/>
        </section>
    )

    
}

export default LineaColchones