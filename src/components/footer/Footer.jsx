import React from "react";
import "./Footer.css";
import {
  FaYoutube,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import gurantee from "../../assets/images/gurantee.png";

const Footer = () => {
  return (
    <>
      <div class="footer">
        <div class="inner-footer">
          <div class="footer-items">
            <h3>Online Shopping</h3>
            <ul>
              <a href="#">
                <li>Men</li>
              </a>
              <a href="#">
                <li>Women</li>
              </a>
              <a href="#">
                <li>Kids</li>
              </a>
              <a href="#">
                <li>Beauty</li>
              </a>
              <a href="">
                <li>Gift-cards</li>
              </a>
              <a href="">
                <li>Myntra Insider</li>
              </a>
            </ul>
          </div>

          <div class="footer-items">
            <h3>Useful Links</h3>
            <ul>
              <a href="#">
                <li>Contact Us</li>
              </a>
              <a href="#">
                <li>FAQ</li>
              </a>
              <a href="#">
                <li>T&C</li>
              </a>
              <a href="#">
                <li>Terms Of Use</li>
              </a>
              <a href="#">
                <li>Shipping</li>
              </a>
              <a href="#">
                <li>Returns</li>
              </a>
              <a href="#">
                <li>Blog</li>
              </a>
              <a href="#">
                <li>Careers</li>
              </a>
              <a href="#">
                <li>SiteMap</li>
              </a>
              <a href="#">
                <li>Cancellation</li>
              </a>
            </ul>
          </div>

          <div class="footer-items">
            <h3>Experience myntra app on mobile</h3>
            <ul className="app-store">
              <a href="#">
                <img
                  src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                  alt=""
                />
              </a>
            </ul>
            <h3>Keep In Touch</h3>
            <div class="border1"></div>
            <ul className="social-icons">
              <a href="#">
                <span>
                  <FaFacebookSquare />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaYoutube />
                </span>
                <span>
                  <FaInstagram />
                </span>
              </a>
            </ul>
          </div>

          <div class="footer-items ">
            <ul>
              <a href="#">
                <img src={gurantee} alt="" />
              </a>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <a>POPULAR SEARCHES</a>
          <br /><br />
          <a href="">Shorts | </a>  
          <a href="">Jeans | </a>
          <a href="">Party Wear | </a>
          <a href="">Jackets | </a>
          <a href="">Trousers | </a>
          <a href="">Jumpsuits | </a>
          <a href="">Innerwear | </a>
          <a href="">Track Pants | </a>
          <a href="">Ripped jeans | </a>
          <a href="">T-shirts | </a>
          <a href="">Men Jeans | </a>
          <a href="">Gym Wear | </a>
          <a href="">Men Trunks | </a>
          <a href="">Shirts | </a>
          <a href="">Pants | </a>
          <a href="">Kurtas | </a>
          <a href="">Kurtis | </a>
          <a href="">Underwear | </a>
          <a href="">Bra | </a>
          <a href="">Panties | </a>
          <a href="">Lingrie | </a>
          <a href="">T-shirts | </a>
          <a href="">Men Jeans | </a>
          <a href="">Gym Wear | </a>
          <a href="">Men Trunks | </a>
          <a href="">Shirts | </a>
          <a href="">Pants | </a>
          <a href="">Jeans | </a>
          <a href="">Party Wear | </a>
          <a href="">Jackets | </a>
          <a href="">Trousers | </a>
          <a href="">Jumpsuits | </a>
          <a href="">Innerwear | </a>
          <a href="">Track Pants | </a>
          <a href="">Ripped jeans | </a>
          <a href="">T-shirts | </a>
          <a href="">Men Jeans | </a>
          <a href="">Gym Wear | </a>
          <a href="">Men Trunks | </a>
          <a href="">Shirts | </a>
          </div>
          <br />
          <div className="contact-section">
              <a href="" className="left">In case of any concern <span>Contact us</span></a>
              <a href="" className="right">© 2022 www.myntra.com. All rights reserved.</a>
          </div>
        </div>
        
    </>
  );
};

export default Footer;
