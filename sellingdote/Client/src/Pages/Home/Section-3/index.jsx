import React from 'react'
import scss from './index.module.scss';
import Classnames from 'classnames';

const HomePage_Section_3 = () => {
    const containerClass = Classnames('container', `${scss.container}`)
  return (
        <>
            <div className={containerClass}>
                <div className={scss.about}>
                    <div className={scss.leftSide}>
                        <img src="https://blog.blueyonder.com/wp-content/uploads/2019/12/BY-Retail.jpg" alt="" />
                        <div>
                            <h2>Trusted Merchant</h2>
                            <p>FOR 50 YEARS</p>
                        </div>
                    </div>
                    <div className={scss.rightSide}>
                        <div>
                            <h5>Merchant Company</h5>
                            <h1>About Us</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde expedita omnis inventore praesentium vitae aliquid nihil dolore molestiae esse odio.</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default HomePage_Section_3