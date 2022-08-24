import {Button} from 'react-bootstrap';

const NavBar = () => {
    return (
        <header className='NavBar'>
            <img src= '/assets/logoElegante.png'/>
           
            <hr></hr>
            
            <nav>

                <button className='btn btn-primary'>HOME</button>
                <button className='btn btn-primary'>NOSOTROS</button>
                <button className='btn btn-primary'>PRODUCTOS</button>
                <button className='btn btn-primary'>COMPRAR ONLINE</button>
            </nav>
            <hr></hr>
        </header>
    )
}

export default NavBar