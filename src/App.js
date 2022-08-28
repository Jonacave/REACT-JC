import './App.css'
import NavBar from './components/navbar/NavBar'
import LineaColchones from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ejemplos/Ejemplos';


const App = () => {

  return (
    <div>
      <NavBar />
      <LineaColchones />
      <ItemListContainer />
    </div>
  );
}

export default App;
