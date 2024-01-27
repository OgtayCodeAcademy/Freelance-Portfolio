import React, { useEffect, useState } from 'react'
import scss from './index.module.scss';
import { useNavigate } from 'react-router';

// Social icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HomePage_Section_6 = () => {
  return (
    <>
        <section>
            <div className={scss.container}>
                <div className={scss.tittle}>
                    <h1>OUR BLOG</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati ab possimus fugiat, autem aliquid, commodi quod voluptatum consectetur.</p>
                </div>
                <div className={scss.cards__wrapper}>                    
                    <div className={scss.card}>
                        <div className={scss.image}>
                            <img src="https://preview.colorlib.com/theme/foundation/images/hero_1_no-text.jpg.webp" alt="" />
                        </div>
                        <div className={scss.content}>
                            <div className={scss.blog__tittle}>
                                <h4>How to Invest In Investing Company</h4>
                            </div>
                            <div className={scss.post__date}>
                                <p>JANUARY 18, 2019 BY <span>James Couper</span></p>
                            </div>
                            <div className={scss.description}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
                            </div>
                            <div className={scss.socialLinks}>
                                <button>Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className={scss.card}>
                        <div className={scss.image}>
                            <img src="https://preview.colorlib.com/theme/foundation/images/hero_2_no-text.jpg.webp" alt="" />
                        </div>
                        <div className={scss.content}>
                            <div className={scss.blog__tittle}>
                                <h4>How to Invest In Investing Company</h4>
                            </div>
                            <div className={scss.post__date}>
                                <p>JANUARY 18, 2019 BY <span>James Couper</span></p>
                            </div>
                            <div className={scss.description}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
                            </div>
                            <div className={scss.socialLinks}>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomePage_Section_6