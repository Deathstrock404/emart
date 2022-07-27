import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route  path ="/" element={<Home/>} />
          <Route  path ="/products" element={<Products/>} />
          <Route  path ="/products/:id" element={<Product/>} />
          <Route  path ="/Cart" element={<Cart/>} />

        </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
