import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import './App.css'
import Nav from './components/Nav';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';

function App() {

  return (
    <div>
      <Nav />
     <Routes>
      <Route path='/' element={ <HomePage />}/>
      <Route path='/products' element={ <Products />}/>
      <Route path='/products/:id' element={ <ProductDetails /> }/>
      <Route path='/cart' element={ <CartPage />}/>
     </Routes>

    </div>
  )
}

export default App
