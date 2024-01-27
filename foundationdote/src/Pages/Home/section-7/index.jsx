import React from 'react'
import scss from './index.module.scss';

const HomePage_Section_7 = () => {
  return (
    <>
        <section className={scss.contact_us_section}>
            <div className={scss.container}>
                <div className={scss.tittle}>
                    <h4>CONTACT US</h4>
                </div>
                <div className={scss.forma}>
                    <form action="">
                        <div className={scss.name__form}>
                            <input type="text" placeholder='Name'/>
                            <input type="text" placeholder='Surname'/>
                        </div>
                        <input type="text" placeholder='Email address'/>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Write your message.'></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomePage_Section_7