import './App.css'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import PokeApi from './components/ejemplos/PokeApi';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import Home from './components/Home/Home';
import {CartProvider } from './CartContext/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


const App = () => {



  return (

    <CartProvider>

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:lineaId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<Navigate to="/" />} />
          {/* <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/contacto' element={<Contacto />} /> */}
          {/* <Route path='/api' element={<PokeApi />} /> */}
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          {/* <Route path='*' element={error 404}/> */}
        </Routes>

      </BrowserRouter>

      </CartProvider>
  );
}

export default App;
