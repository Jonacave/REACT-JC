import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useLoginContext } from '../../LoginContext/LoginContext'

const Header = () => {

    const { user, logout } = useLoginContext()
    return (
        <header>
            <div className='Header'>
                <img src='/assets/logoElegante.png' alt="logo empresa" />
                <hr></hr>
                <Link to='/' className="link">Home</Link>
                <Link to='/productos' className="link" >Productos</Link>
                <Link to='/nosotros' className="link">Nosotros</Link>
                <Link to='/contacto' className="link">Contacto</Link>
                <CartWidget />
                <hr></hr>
            </div>
            <div className='Usuario'>
                <small> Bienvenido: {user.user} </small>
                <button onClick={logout} className="btn btn-outline-danger">Salir</button>
            </div>
        </header>
    )
}

export default Header