import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import { CartProvider } from '../CartContext/CartContext'
import { ShopProvider } from '../ShopContext/ShopContext'

function Layout() {
  return (
    <>
    <NavBar />
    <ShopProvider>
    <CartProvider>
    <Outlet />
    </CartProvider>
    </ShopProvider>
    </>
   
  )
}

export default Layout