import CarWidget from "../CarWidget/CarWidget"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>

            <nav className="NavBar">
                {<h2>Linea de colchones: </h2>}
                <Link to='/productos'>Todos</Link>
                <Link to='/productos/exclusive' >Exclusive</Link>
                <Link to='/productos/espuma' >Espuma</Link>
                <Link to='/productos/resortes'>Resortes</Link>
                <CarWidget />
            </nav>
        </div>
    )
}

export default NavBar