import React from 'react'
import scss from './index.module.scss';
import Classnames from 'classnames';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const HomePage_Section_2 = () => {
    const containerClass = Classnames('container', scss.container)
  return (
    <>
        <div className={containerClass}>
            <div className={scss.tittle}>
                <h4>Popular Products</h4>
                <h2>Our Products</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aut possimus aspernatur porro ullam excepturi fugit quidem impedit animi non, consectetur amet. Veniam possimus quibusdam odio fugit laudantium minima fuga?</p>
            </div>
            <div className={scss.productsWrapper}>
                <div className={scss.card}>
                    <div className={scss.cardTop}>
                        <img src='https://krosspark.ru/pictures/product/middle/8533_middle.jpg' alt="" />
                    </div>
                    <div className={scss.cardBottom}>
                        <h3>Nike Force</h3>
                        <div className={scss.rate_wishlist}>
                            <p className={scss.rate}><button><StarBorderIcon className={scss.starIcon}/></button><span>3.5</span></p>
                            <p className={scss.wishlist}><button><FavoriteBorderIcon className={scss.heartIcon}/></button><span>0</span></p>
                        </div>
                        <p className={scss.description}>The shoes are sold in 3 different styles: low, mid, and high.</p>
                        <div className={scss.buttons}>
                            <button>Add To Basket</button>
                            <button>View</button>
                        </div>
                    </div>
                </div> 
                <div className={scss.card}>
                    <div className={scss.cardTop}>
                        <img src='https://onthestreet.ru/image/cache/catalog/katalog1/171/IMG17198876fa4504fb70b317e62b23bd73-1000x750.jpg' alt="" />
                    </div>
                    <div className={scss.cardBottom}>
                        <h3>Air Jordan</h3>
                        <div className={scss.rate_wishlist}>
                            <p className={scss.rate}><button><StarBorderIcon className={scss.starIcon}/></button><span>3.5</span></p>
                            <p className={scss.wishlist}><button><FavoriteBorderIcon className={scss.heartIcon}/></button><span>0</span></p>
                        </div>
                        <p className={scss.description}>Air Jordan is a line of basketball shoes produced by Nike, Inc.</p>
                        <div className={scss.buttons}>
                            <button>Add To Basket</button>
                            <button>View</button>
                        </div>
                    </div>
                </div> 
                <div className={scss.card}>
                    <div className={scss.cardTop}>
                        <img src='https://www.reebok.eu/BWStaticContent/153000/f98d9729-53a6-49f5-bf96-91e4c0a33727_1-gz1605-lsl-ecom.jpg' alt="" />
                    </div>
                    <div className={scss.cardBottom}>
                        <h3>Club C 85 Shoes</h3>
                        <div className={scss.rate_wishlist}>
                            <p className={scss.rate}><button><StarBorderIcon className={scss.starIcon}/></button><span>3.5</span></p>
                            <p className={scss.wishlist}><button><FavoriteBorderIcon className={scss.heartIcon}/></button><span>0</span></p>
                        </div>
                        <p className={scss.description}>Reebok Classic is a lifestyle shoe brand that consists of athletic shoes.</p>
                        <div className={scss.buttons}>
                            <button>Add To Basket</button>
                            <button>View</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </>
  )
}

export default HomePage_Section_2