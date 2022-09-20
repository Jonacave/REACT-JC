import {Link} from 'react-router-dom'
// import { useCartContext } from '../../CartContext/CartContext'
import CartWidget from '../CartWidget/CartWidget'

const Header = () => {

    // const {cart} = useCartContext()
    return (
        <header>
            <img src='/assets/logoElegante.png' alt="logo empresa"/>
            <hr></hr>
                <Link to='/'className="link">Home</Link>
                <Link to='/productos'className="link" >Productos</Link>
                <Link to='/nosotros' className="link">Nosotros</Link>
                <Link to='/contacto' className="link">Contacto</Link>   
                <CartWidget/>
            <hr></hr>
        </header>
    )
}

export default Header