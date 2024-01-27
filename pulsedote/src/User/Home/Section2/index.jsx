import React from 'react'
import scss from './index.module.scss';

const HomePage_Section2 = () => {
  return (
    <>
        <section className={scss.welcome}>
            <div className={scss.tittle}>
                <img src="meat.png" alt="" />
                <h1>Welcome</h1>
            </div>
            <div className={scss.years}>
                <div className={scss.year}>
                    <h1>2002</h1>
                    <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
                </div>
                <div className={scss.year}>
                    <h1>2010</h1>
                    <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
                </div>
                <div className={scss.year}>
                    <h1>2018</h1>
                    <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
                </div>
            </div>
            <img src="sign.png" alt="" />
        </section>
    </>
  )
}

export default HomePage_Section2