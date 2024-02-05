import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import ProductItem from './Pages/ProductItem/ProductItem'
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import NotFound from './Components/NotFound';

import './App.css'


function App() {

  return (
    <>
      <NavBar />
      <div className='app-general-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products'>
            <Route index element={<Products />} />
            <Route path=':id' element={<ProductItem />} />
            {/* <Route path='new' element={<UserNew />} /> */}
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

    </>
  )
}

export default App
