import CarWidget from "../CarWidget/CarWidget"
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className>
            <img src='/assets/logoElegante.png' alt="logo empresa"/>
            <hr></hr>
            <Link to='/'>Home</Link>
                <Link to='/productos' >Productos</Link>
                <Link to='/nosotros' >Nosotros</Link>
                <Link to='/contacto' >Contacto</Link>           
            <hr></hr>
        </header>
    )
}

export default Header