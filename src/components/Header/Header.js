import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <img src='/assets/logoElegante.png' alt="logo empresa"/>
            <hr></hr>
            <Link to='/'className="link">Home</Link>
                <Link to='/productos'className="link" >Productos</Link>
                <Link to='/nosotros' className="link">Nosotros</Link>
                <Link to='/contacto' className="link">Contacto</Link>           
            <hr></hr>
        </header>
    )
}

export default Header