import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const MainRoot = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainRoot