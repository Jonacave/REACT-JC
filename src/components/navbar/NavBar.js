import CarWidget from "../CarWidget/CarWidget"

const NavBar = () => {
    return (
        <header className='NavBar'>
            <img src='/assets/logoElegante.png' />

            <hr></hr>
            <nav className="NavBar">
                <button className='btn btn-primary'>HOME</button>
                <button className='btn btn-primary'>NOSOTROS</button>
                <button className='btn btn-primary'>PRODUCTOS</button>
                <CarWidget/>
                
            </nav>
            
            <hr></hr>
        </header>
    )
}

export default NavBar