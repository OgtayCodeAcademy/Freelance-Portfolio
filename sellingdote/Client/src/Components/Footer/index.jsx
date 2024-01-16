import React from 'react'
import scss from './index.module.scss';
import Classnames from 'classnames';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const containerClass = Classnames('container', `${scss.container}`)
  return (
    <>
        <footer>
            <div className={containerClass}>
                <ul>
                    <li>ABOUT US</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti, corporis libero architecto esse laborum.</li>
                </ul>
                <ul>
                    <li>QUICK LINKS</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Testimonials</li>
                    <li>Contact Us</li>
                </ul>
                <ul>
                    <li>Follow US</li>
                    <ul className={scss.followUS}>
                        <li><FacebookIcon className={scss.Icon}/></li>
                        <li><TwitterIcon className={scss.Icon}/></li>
                        <li><LinkedInIcon className={scss.Icon}/></li>
                        <li><InstagramIcon className={scss.Icon}/></li>
                    </ul>
                </ul>
            </div>
            <div className={containerClass}>
                <h4>Copyright ©2024 All rights reserved | This template is made with love by Ogtay Iskandarov</h4>
            </div>
        </footer>
    </>
  )
}

export default Footer