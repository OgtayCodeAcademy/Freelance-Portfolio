import React from 'react'
import scss from './index.module.scss';
// MUI Icons
import SavingsIcon from '@mui/icons-material/Savings';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PaidIcon from '@mui/icons-material/Paid';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const HomePage_Section_4 = () => {
  return (
    <>
        <section>
            <div className={scss.container}>
                <div className={scss.wrapper}>
                    <div className={scss.card}>
                        <SavingsIcon className={scss.icon}/>
                        <h4>Make Donation</h4>
                        <p>Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.</p>
                    </div>
                    <div className={scss.card}>
                        <MedicalServicesIcon className={scss.icon}/>
                        <h4>Medical Health</h4>
                        <p>Praesentium magnam pariatur quae necessitatibus eligendi voluptate ducimus.</p>
                    </div>
                    <div className={scss.card}>
                        <SoupKitchenIcon className={scss.icon}/>
                        <h4>Food for the Poor</h4>
                        <p>Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.</p>
                    </div>
                    <div className={scss.card}>
                        <VolunteerActivismIcon className={scss.icon}/>
                        <h4>Help & Love</h4>
                        <p>Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.</p>
                    </div>
                    <div className={scss.card}>
                        <PaidIcon className={scss.icon}/>
                        <h4>Give To The Needy</h4>
                        <p>Praesentium magnam pariatur quae necessitatibus eligendi voluptate ducimus.</p>
                    </div>
                    <div className={scss.card}>
                        <AccessibilityNewIcon className={scss.icon}/>
                        <h4>Volunteer</h4>
                        <p>Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomePage_Section_4