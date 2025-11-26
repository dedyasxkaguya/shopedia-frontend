// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/Home'
import Show from './assets/Show'
import Login from './assets/Login'
import Register from './assets/Register'
import Cart from './assets/Cart'
import Product from './assets/Product'
import Landing from './assets/Landing'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home/:id' element={<Home />} />
      <Route path='/product/:id' element={<Show />} />
      <Route path='/user/login' element={<Login />} />
      <Route path='/user/register' element={<Register />} />
      <Route path='/user/cart/:id' element={<Cart />} />
      <Route path='/product/add' element={<Product />} />
    </Routes>
  )
}

export default App