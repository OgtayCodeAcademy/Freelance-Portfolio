import React from "react";
import scss from "./index.module.scss";

// Social icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={scss.container}>
          <div className={scss.topSide}>
            <div className={scss.left__side}>
              <ul>
                <li>ABOUT US</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  facere laudantium magnam voluptatum autem. Amet aliquid
                  nesciunt veritatis aliquam.
                </li>
              </ul>
              <ul>
                <li>FEATURES</li>
                <li>About Us</li>
                <li>Testimonials</li>
                <li>Terms of Service</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className={scss.right__side}>
              <ul>
                <li>SOME PARAGRAPH</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat nostrum libero iusto dolorum vero atque aliquid.
                </li>
                <li>SUBSCRIBE TO NEWSLETTER</li>
                <li>
                  <form action="">
                    <input type="text" />
                    <button>SUBSCRİBE</button>
                  </form>
                </li>
                <li className={scss.social}>
                  <h4>FOLLOW US</h4>
                  <ul className={scss.socialMedias}>
                    <li>
                      <FacebookIcon />
                    </li>
                    <li>
                      <TwitterIcon />
                    </li>
                    <li>
                      <InstagramIcon />
                    </li>
                    <li>
                      <LinkedInIcon />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className={scss.bottomSide}>
            <h3>Copyright ©2024 All rights reserved | This template is made with love by Ogtay Iskandarov</h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
