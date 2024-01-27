import { Outlet } from 'react-router-dom';
import React from 'react'
import Navabr from '../../Components/Navbar';

const UserRoot = () => {
  return (
    <>
        <Navabr/>
        <Outlet/>
    </>
  )
}

export default UserRoot