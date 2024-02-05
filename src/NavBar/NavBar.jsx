import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './NavBar.css'

import logo from '../assets/logos/logo.png';

const NavBar = () => {
  const productsIdsObj = useSelector(state => state.cartSliceReducer.productsIds);

  let quantity = Object.entries(productsIdsObj).reduce((state, action) => {
    return state = state + action[1]
  }, 0)

  return (
    <header>
      <div className='header-logo'>
        <img src={logo} alt="" />
      </div>
      <nav className='header-nav'>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/products'>Products</NavLink></li>
          <li>
            <NavLink to='/cart'>
              <i className="fa-solid fa-cart-shopping header-cart"></i>
              <span className='header-quantity'>{quantity}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar