import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div>  
            <nav className="NavBar">
                {<h2>Categorias: </h2>}
                <Link to='/productos' className="link" >Todos</Link>
                <Link to='/productos/exclusive' className="link"  >Exclusive</Link>
                <Link to='/productos/espuma'  className="link" >Espuma</Link>
                <Link to='/productos/resortes' className="link" >Resortes</Link>
            </nav>
        </div>
    )
}

export default NavBar