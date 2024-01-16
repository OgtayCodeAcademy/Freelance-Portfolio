import React from "react";
import scss from "./index.module.scss";
import Classnames from 'classnames';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
    const containerClass = Classnames('container', `${scss.container}`)
    let [sidebarMenu, setSidebarMenu] = React.useState(false)
  return (
    <>
      <header>
      <div className={containerClass}>
          <div className={scss.leftSide}>
            <h1>Selling <span>.</span></h1>
          </div>
          <div className={scss.rightSide}>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Special</li>
              <li>Testimonials</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <button onClick={()=>{setSidebarMenu(!sidebarMenu)}}><MenuIcon className={scss.icon}/></button>
          </div>
      </div>
      </header>
      {sidebarMenu && <div className={scss.responsiveNavbar}>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Special</li>
          <li>Testimonials</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <button onClick={()=>{setSidebarMenu(!sidebarMenu)}}><ClearIcon className={scss.Icon}/></button>
      </div>}
    </>
  );
};

export default Navbar;
