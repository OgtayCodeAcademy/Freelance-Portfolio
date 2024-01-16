import React from 'react'
import scss from './index.module.scss';
import Classnames from 'classnames';

const HomePage_Section_1 = () => {
    const containerClass = Classnames('container', `${scss.container}`)

  return (
    <>
        <div className={scss.section_1}>
            <img src="https://klike.net/uploads/posts/2023-05/1685420527_3-59.jpg" alt="" />
            <div className={containerClass}>
                <h1>Shop With Us</h1>
                <p>Ollitia exercitationem ipsa natus, veritatis eius voluptates. Sapiente soluta obcaecati eveniet aspernatur tempora.</p>
                <div className={scss.buttons}>
                    <button>Shop Now</button>
                    <button>Club Membership</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage_Section_1