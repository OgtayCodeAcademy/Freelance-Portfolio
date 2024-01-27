import React from 'react'
import scss from './index.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const navbarAnimation = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('.header').style.height = '69.19px'
    }else{
        document.querySelector('.header').style.height = '96px'
    }
  }
  window.onscroll = function(){navbarAnimation()}

  const [showMenu, setShowMenu] = React.useState(false)
  return (
    <>
        <header className='header'>
            <div className={scss.navbar}>
                <div className={scss.left__side}>
                    <h1>FOUNDATION</h1>
                </div>
                <div className={scss.right__side}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Discover</li>
                        <li>Donate</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <button onClick={()=> setShowMenu(!showMenu)} className={scss.responsiveMenuButton}><MenuIcon className={scss.responsiveMenu}/></button>
            </div>
        </header>


        {/* Responsive Menu */}
        {showMenu ? <div className={scss.menu}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Discover</li>
                <li>Donate</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <button className={scss.closeMenuButton} onClick={()=> setShowMenu(false)}><CloseIcon className={scss.closeMenu}/></button>
        </div> : null}
    </>
  )
}

export default Navbar