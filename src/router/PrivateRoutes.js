import Header from '../components/Header/Header'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Nosotros from '../components/Nosotros/Nosotros';
import Contacto from '../components/Contacto/Contacto';
import ItemDetailContainer from '../components/ItemListContainer/ItemDetailContainer';
import Home from '../components/Home/Home';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';
import { Routes, Route, Navigate } from "react-router-dom"


const PrivateRoutes = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productos' element={<ItemListContainer />} />
                <Route path='/productos/:lineaId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='*' element={<Navigate to="/" />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </>
    )
}

export default PrivateRoutes