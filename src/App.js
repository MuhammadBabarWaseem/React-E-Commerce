import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Product from './Component/Product';
import ProductThing from './Component/ProductThing';
import About from './Component/About';
import NotAvailable from './Component/NotAvailable';
import Contact from './Component/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path = '/' element={<Home/>} />
    <Route exact path = '/product' element={<Product/>} />
    <Route exact path = "/products/:id" element={<ProductThing/>} />
    <Route exact path = "/about" element={<About/>} />
    <Route exact path = "/NA" element={<NotAvailable/>} />
    <Route exact path = "/AddToCart" element={<NotAvailable/>} />
    <Route exact path = "/login" element={<NotAvailable/>} />
    <Route exact path = "/register" element={<NotAvailable/>} />
    <Route exact path = "/cart" element={<NotAvailable/>} />
    <Route exact path = "/contact" element={<Contact/>} />

      </Routes>
    </BrowserRouter>
      

    </>
  );
}

export default App;
