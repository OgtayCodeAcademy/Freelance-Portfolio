import React from 'react'
import scss from './index.module.scss';
// Social icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const HomePage_Section_5 = () => {
  return (
    <>
        <section>
            <div className={scss.container}>
                <div className={scss.tittle}>
                    <h1>OUR LEADERSHIP</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis, eius, eos consectetur consequuntur sit. Aut, perspiciatis, reprehenderit.</p>
                </div>
                <div className={scss.cards__wrapper}>
                    <div className={scss.card}>
                        <div className={scss.image}>
                            <img src="https://preview.colorlib.com/theme/foundation/images/person_1.jpg.webp" alt="" />
                        </div>
                        <div className={scss.profession}>
                            <h4>MINING EXPERT</h4>
                        </div>
                        <div className={scss.about}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. Repellendus vero, consequuntur!</p>
                        </div>
                        <div className={scss.socialLinks}>
                            <button><FacebookIcon className={scss.Icon}/></button>
                            <button><TwitterIcon className={scss.Icon}/></button>
                            <button><InstagramIcon className={scss.Icon}/></button>
                        </div>
                    </div>
                    <div className={scss.card}>
                        <div className={scss.image}>
                            <img src="https://preview.colorlib.com/theme/foundation/images/person_1.jpg.webp" alt="" />
                        </div>
                        <div className={scss.profession}>
                            <h4>MINING EXPERT</h4>
                        </div>
                        <div className={scss.about}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. Repellendus vero, consequuntur!</p>
                        </div>
                        <div className={scss.socialLinks}>
                            <button><FacebookIcon className={scss.Icon}/></button>
                            <button><TwitterIcon className={scss.Icon}/></button>
                            <button><InstagramIcon className={scss.Icon}/></button>
                        </div>
                    </div>
                    <div className={scss.card}>
                        <div className={scss.image}>
                            <img src="https://preview.colorlib.com/theme/foundation/images/person_1.jpg.webp" alt="" />
                        </div>
                        <div className={scss.profession}>
                            <h4>MINING EXPERT</h4>
                        </div>
                        <div className={scss.about}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. Repellendus vero, consequuntur!</p>
                        </div>
                        <div className={scss.socialLinks}>
                            <button><FacebookIcon className={scss.Icon}/></button>
                            <button><TwitterIcon className={scss.Icon}/></button>
                            <button><InstagramIcon className={scss.Icon}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomePage_Section_5