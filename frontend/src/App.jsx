import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import './App.css'
import Nav from './components/Nav';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import EditProduct from './pages/EditProduct';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';

function App() {

  return (
    <div>
      <Nav />
     <Routes>
      <Route path='/' element={ <HomePage />}/>
      <Route path='/products' element={ <Products />}/>
      <Route path='/products/:id' element={ <ProductDetails /> }/>
      <Route path='/products/edit/:id' element={ <EditProduct /> }/>
      <Route path='/products/new' element={ <EditProduct /> }/>
      <Route path='/login' element={ <LoginPage /> }/>
      <Route path='/cart' element={ <CartPage />}/>
      <Route path='/about' element={ <AboutPage />}/>
     </Routes>

    </div>
  )
}

export default App
