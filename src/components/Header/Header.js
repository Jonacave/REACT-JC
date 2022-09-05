import CarWidget from "../CarWidget/CarWidget"
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className='NavBar'>
            <img src='/assets/logoElegante.png' alt="logo empresa"/>

            <hr></hr>
            <nav className="NavBar">
                <Link to='/'>Home</Link>
                <Link to='/productos/exclusive' >Exclusive</Link>
                <Link to='/productos/espuma' >Espuma</Link>
                <Link to='/productos/resortes'>Resortes</Link>  
            </nav>
            
            <hr></hr>
        </header>
    )
}

export default Header