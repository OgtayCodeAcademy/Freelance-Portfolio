import React from 'react'
import scss from './index.module.scss';
const HomePage_Section6 = () => {
  return (
    <>
        <section className={scss.main}>
            <img className={scss.background} src="footer.jpg" alt="" />
            <section className={scss.contactUs}>
            <div className={scss.tittle}>
                <img src="footericon.svg" alt="" />
                <h1>Contact us</h1>
            </div>
            <form action="">
                <div>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='E-mail'/>
                </div>
                <textarea cols="30" rows="10" placeholder='Message'></textarea>
                <button>Send Message</button>
            </form>
            </section>
            <p>Copyright ©2024 All rights reserved | This template is made with love by Ogtay Iskandarov</p>
        </section>
    </>
  )
}

export default HomePage_Section6