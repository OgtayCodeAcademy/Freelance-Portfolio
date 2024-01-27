import React from 'react'
import scss from './index.module.scss';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

const HomePage_Section4 = () => {
  return (
    <>
        <section className={scss.servicesSection}>
            <div className={scss.tittle}>
                <img src="waiter.png" alt="" />
                <h1>Our Services</h1>
            </div>
            <div className={scss.services}>
                <div className={scss.service}>
                    <FreeBreakfastIcon className={scss.Icon}/>
                    <h1>Breakfast</h1>
                    <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
                </div>
                <div className={scss.service}>
                    <BrunchDiningIcon className={scss.Icon}/>
                    <h1>Brunch</h1>
                    <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
                </div>
                <div className={scss.service}>
                    <RamenDiningIcon className={scss.Icon}/>
                    <h1>Lunch</h1>
                    <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
                </div>
                <div className={scss.service}>
                    <LunchDiningIcon className={scss.Icon}/>
                    <h1>Dinner</h1>
                    <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomePage_Section4