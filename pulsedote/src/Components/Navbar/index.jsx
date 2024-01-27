import React from 'react'
import scss from './index.module.scss';
import Classnames from 'classnames';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';


const Navabr = () => {
    const containerClass = Classnames('container', scss.container)
    let [sidebarMenu, setSidebarMenu] = React.useState(false)
  return (
    <>
        <header>
            <div className={containerClass}>
                <div className={scss.section1}>
                    <h1>Cooking <span>.</span></h1>
                </div>
                <div className={scss.section2}>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Restaurant</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={scss.section3}>
                    <h3>Reservations <span>652-345 3222 11</span></h3>
                </div>
                <button onClick={()=> setSidebarMenu(!sidebarMenu)}><MenuIcon className={scss.Icon}/></button>
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
  )
}

export default Navabr