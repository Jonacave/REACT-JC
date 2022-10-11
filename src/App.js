import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './CartContext/CartContext';
import { LoginProvider } from './LoginContext/LoginContext';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
