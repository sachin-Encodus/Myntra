import React from "react";
import "./Footer.css";
import {
  FaYoutube,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";


const Footer = () => {
  return (
    <>
      
        <div style={{position: "relative"}}>
        <div id="web-footerMount">
            <div style={{position:"relative",zIndex:"5" ,padding:"30px 0px 40px 0px",background:"#FAFBFC"}}
                className="mobile-footer">
                <footer className="desktop-footerContainer">
                    <div>
                        
                        <div className="desktop-genericInfo">
                            <div className="desktop-shopLinks">
                                <p className="desktop-gInfoTitle"><a href="\" style={{textDecoration: "none", color: "#000"}}> ONLINE SHOPPING </a></p>
                                <a href="/" >
                                    Men
                                </a>
                                <a href="/">
                                  Women
                                </a>
                                <a href="/">
                                    Kids
                                </a>
                                <a href="/">
                                   Home &amp; Living
                                </a>
                                <a href="/">
                                  Beauty
                                </a><a href="/">Gift Cards</a>
                                <a href="/" >
                                    Myntra Insider
                                    <span className="desktop-superscript"> New </span>
                                </a>
                            </div>
                            <div className="desktop-usefulLinks" >
                                <p className="desktop-gInfoTitle"> USEFUL LINKS </p>
                                <a href="/">
                                    Contact Us
                                </a>
                                <a href="/" >
                                   FAQ
                                </a>
                                <a href="/"  >
                                   T &amp; C
                                </a>
                                <a href="/" >
                                    Terms Of Use
                                </a>
                                <a href="\">
                                    Track Orders
                                </a>
                                <a href="/faqs#shipping">
                                    Shipping
                                </a>
                                <a href="/faqs#cancel"  >
                                   Cancellation
                                </a>
                                <a href="/faqs#returns" >
                                   Returns
                                </a>
                                <a href="/security/whitehat"  >
                                    Whitehat
                                </a>
                                <a href="http://blog.myntra.com/"  >
                                    Blog
                                </a>
                                <a href="https://careers.myntra.com" >
                                    Careers
                                </a>
                                <a href="/privacypolicy"  >
                                    Privacy Policy
                                </a>
                                <a href="/sitemap" >
                                    Site Map
                                </a>
                                
                            </div>
                            <div className="desktop-appExperience display-none" >
                                <p className="desktop-gInfoTitle"> EXPERIENCE MYNTRA APP ON MOBILE </p>
                                <div className="desktop-downLinkContainer" >
                                    <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" style={{height:"42px"}}/>
                                        <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" style={{height:"42px"}}/>  
                                </div>
                                <div className="desktop-keepInTouch"> KEEP IN TOUCH </div>
                                
                                <FaFacebookSquare className="desktop-facebook " style={{height:"20px", color: "#696e79"}} />
                                   
                               
                                
                                <FaTwitter className="desktop-twitter" style={{height:"20px", color: "#696e79"}}  />
                                    
                              
                                      <FaYoutube className="desktop-youtube" style={{height:"20px", color: "#696e79"}}  />
                                   
                               
                                <FaInstagram className="desktop-instagra" style={{height:"20px", color: "#696e79"}}  />
                                    
                            </div>
                            <div className="desktop-promises display-none" >
                                <div className="desktop-section" >
                                    <div className="desktop-original" >
                                    <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" style={{height:"40px"}} />
                                    </div>
                                    <div ><strong >100% ORIGINAL </strong>
                                        guarantee for all products at myntra.com
                                       
                                    </div>
                                </div>
                                <div className="desktop-section" >
                                    <div className="desktop-return" >
                                    <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="" style={{height:"40px"}} />
                                    </div>
                                    <div ><strong >Return within 30days </strong>
                                        of receiving your order
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="desktop-popularSearch display-none"  style={{marginTop: "80px"}}>
                            <div >
                                <hr  />
                                <div className="desktop-pSearchTitle" > POPULAR SEARCHES </div>
                                <div className="desktop-pSearchlinks" >
                                    
                                    <a href="/shorts" >
                                        Shorts
                                    </a>
                                    <a href="/jeans" >
                                       Jeans
                                    </a>
                                    <a href="/party-wear" >
                                       Party Wear
                                    </a>
                                    <a href="/jackets" >
                                        Jackets
                                    </a>
                                    <a href="/trousers" >
                                       Trousers 
                                    </a>
                                    <a href="/jumpsuit" >
                                        JumpSuit
                                    </a>
                                    <a href="/innerwear" >
                                       Innerwear
                                    </a>
                                    <a href="/track-pants" >
                                       Track Pants
                                    </a>
                                    <a href="/ripped-jeans" >
                                        Ripped Jeans
                                    </a>
                                    <a href="/coats" >
                                        Coats
                                    </a>
                                    <a href="/men-tshirts" >
                                        Men Tshirts
                                    </a>
                                    <a href="/capris" >
                                        Capris
                                    </a>
                                    <a href="/biker-jackets" >
                                        Biker Jackets
                                    </a>
                                    <a href="/shrug" >
                                        Shrug
                                    </a>
                                    <a href="/tshirts" >
                                       Tshirts
                                    </a>
                                    <a href="/men-kurtas" >
                                            Men Kurtas
                                    </a>
                                    <a href="/kurta-pyjama" >
                                       Kurta Pyjama
                                    </a>
                                    <a href="/sweaters" >
                                       Sweaters
                                    </a>
                                    
                                    <a href="/thongs" >
                                        
                                        Thongs
                                        
                                    </a>
                                    <a href="/sports-wear" >
                                      
                                        Sportswear
                                        
                                    </a>
                                    <a href="/gym-wear" >
                                        
                                        Gym Wear
                                       
                                    </a>
                                    <a href="/sweatshirts" >
                                       
                                        Sweatshirts
                                        
                                    </a>
                                    <a href="/men-tshirts" >
                                       
                                      Men T Shirts
                                        
                                    </a>
                                    <a href="/men-trousers" >
                                       
                                        Men Trousers
                                        
                                    </a>
                                    <a href="/men-jackets" >
                                       
                                        Men Jackets
                                        
                                    </a>
                                    <a href="/men-sweaters" >
                                        
                                        Men Sweaters
                                       
                                    </a>
                                    <a href="/men-shrugs" >
                                       
                                      Men Shrugs
                                        
                                    </a>
                                    <a href="/men-pants" >
                                      
                                      Men Pants
                                        
                                    </a>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="desktop-fInfoSection" >
                            <div className="desktop-contact" >
                                In case of any concern,
                               <a href="/contactus" > Contact Us </a>
                            </div>
                            <div className="desktop-copywrite" >
                                2022
                                www.myntra.com. All rights reserved.
                                
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
        
    </>
  );
};

export default Footer;
