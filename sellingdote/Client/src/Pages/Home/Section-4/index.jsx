import React from 'react'
import Classnames from 'classnames';
import scss from './index.module.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const HomePage_Section_4 = () => {
    const containerClass = Classnames('container', `${scss.container}`)

  return (
    <>
        <div className={containerClass}>
            <div className={scss.title}>
                <h3>Team</h3>
                <h1>Leadership</h1>
           </div>
            <div className={scss.cardsWrapper}>
                <div className={scss.card}>
                    <div className={scss.cardTop}>
                        <img src="https://wp-s.ru/wallpapers/4/13/429277522787798/a-guy-with-coffee-in-his-hands-and-a-phone.jpg" alt="" />
                    </div>
                    <div className={scss.cardBottom}>
                        <h3>Jolin Rocster</h3>
                        <h4>Co Founder</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eveniet nihil architecto dolorum modi.</p>
                        <div className={scss.socialMedias}>
                            <button><FacebookIcon className={scss.Icon}/></button>
                            <button><TwitterIcon className={scss.Icon}/></button>
                            <button><LinkedInIcon className={scss.Icon}/></button>
                            <button><InstagramIcon className={scss.Icon}/></button>
                        </div>
                    </div>

                </div>
                <div className={scss.card}>
                    <div className={scss.cardTop}>
                        <img src="https://zarabotat-vsem.ru/wp-content/uploads/2021/04/pexels-photo-3184611-scaled.jpeg" alt="" />
                    </div>
                    <div className={scss.cardBottom}>
                        <h3>Jake Miles</h3>
                        <h4>Developer</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eveniet nihil architecto dolorum modi.</p>
                        <div className={scss.socialMedias}>
                            <button><FacebookIcon className={scss.Icon}/></button>
                            <button><TwitterIcon className={scss.Icon}/></button>
                            <button><LinkedInIcon className={scss.Icon}/></button>
                            <button><InstagramIcon className={scss.Icon}/></button>
                        </div>
                    </div>

                </div>
                <div className={scss.card}>
                    <div className={scss.cardTop}>
                        <img src="https://sun9-31.userapi.com/impf/c836438/v836438071/6a5e2/RCfXScXZBUE.jpg?size=960x719&quality=96&sign=71b76d2ad3f1794722bb6e26e4b16c21&c_uniq_tag=6rXkZIWi5sCirS1e_leApGWeI0u5TOLX9-LXILUcM1o&type=album" alt="" />
                    </div>
                    <div className={scss.cardBottom}>
                        <h3>Mike Casper</h3>
                        <h4>UI Designer</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eveniet nihil architecto dolorum modi.</p>
                        <div className={scss.socialMedias}>
                            <button><FacebookIcon className={scss.Icon}/></button>
                            <button><TwitterIcon className={scss.Icon}/></button>
                            <button><LinkedInIcon className={scss.Icon}/></button>
                            <button><InstagramIcon className={scss.Icon}/></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage_Section_4