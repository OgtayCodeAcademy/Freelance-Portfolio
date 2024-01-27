import React from "react";
import scss from "./index.module.scss";

const HomePage_Section_3 = () => {
  return (
    <>
      <section className={scss.section__3}>
        <div className={scss.background__image}>
        </div>
        <div className={scss.container}>
            <div className={scss.top__side}>
              <div className={scss.left__side}>
                <img
                  src="https://preview.colorlib.com/theme/foundation/images/hero_1_no-text.jpg.webp"
                  alt=""
                />
              </div>
              <div className={scss.right__side}>
                <h3>OUR MISSION</h3>
                <p>
                  Accusantium dignissimos voluptas rem consequatur blanditiis
                  error ratione illo sit quasi ut, praesentium magnam, pariatur
                  quae, necessitatibus
                </p>
                <p>
                  Dolor, eligendi voluptate ducimus itaque esse autem
                  perspiciatis sint! Recusandae dolor aliquid inventore sit,
                </p>
              </div>
            </div>
            <div className={scss.bottom__side}>
                <div className={scss.statistics}>
                    <h3>15</h3>
                    <p>Number of Orphanage</p>
                </div>
                <div className={scss.statistics}>
                    <h3>392</h3>
                    <p>Number of Donations</p>
                </div>
                <div className={scss.statistics}>
                    <h3>3,293</h3>
                    <p>Number of Volenteers</p>
                </div>
                <div className={scss.statistics}>
                    <h3>1,212</h3>
                    <p>Number of Orphans</p>
                </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default HomePage_Section_3;
