import React from 'react'
import Classnames from 'classnames';
import scss from './index.module.scss';
import CloudIcon from '@mui/icons-material/Cloud';
import BarChartIcon from '@mui/icons-material/BarChart';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import SellIcon from '@mui/icons-material/Sell';
import PaymentsIcon from '@mui/icons-material/Payments';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';

const HomePage_Section_5 = () => {
    const containerClass = Classnames('container', `${scss.container}`)
  return (
    <>
        <div className={containerClass}>
            <div className={scss.tittle}>
                <h5>Our Services</h5>
                <h2>We Offer Services</h2>
            </div>
            <div className={scss.services}>
                <div className={scss.service}>
                    <DonutSmallIcon className={scss.Icon}/>
                    <div>
                        <h3>Business Consulting</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo fugiat quis molestias, suscipit rerum.</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className={scss.service}>
                    <BarChartIcon className={scss.Icon}/>
                    <div>
                        <h3>Market Analysis</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo fugiat quis molestias, suscipit rerum.</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className={scss.service}>
                    <DeviceHubIcon className={scss.Icon}/>
                    <div>
                        <h3>User Monitoring</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo fugiat quis molestias, suscipit rerum.</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className={scss.service}>
                    <SellIcon className={scss.Icon}/>
                    <div>
                        <h3>Seller Consulting</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo fugiat quis molestias, suscipit rerum.</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className={scss.service}>
                    <PaymentsIcon className={scss.Icon}/>
                    <div>
                        <h3>Financial Investment</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo fugiat quis molestias, suscipit rerum.</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className={scss.service}>
                    <CloudIcon className={scss.Icon}/>
                    <div>
                        <h3>Financial Management</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo fugiat quis molestias, suscipit rerum.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage_Section_5