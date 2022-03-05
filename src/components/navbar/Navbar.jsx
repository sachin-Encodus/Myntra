import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div
        style={{zIndex: 3}}
        className="myx-header-container"
        id="desktop-headerMount"
      >
        <div
          data-reactroot=""
          data-reactid="1"
          data-react-checksum="-124313650"
        >
          <div data-reactid="2">
            <header
              className="desktop-container"
              id="desktop-header-cnt"
              data-reactid="3"
            >
              <div className="desktop-bound" data-reactid="4">
                <div className="desktop-logoContainer" data-reactid="5">
                  <a  className="myntraweb-sprite desktop-logo sprites-headerLogo" ></a>
                </div>
                <nav className="desktop-navbar" data-reactid="7">
                  <div className="desktop-navLinks" data-reactid="8">
                    <div className="desktop-navContent" data-reactid="9">
                      <div className="desktop-navLink" data-reactid="10">
                        <a
                          href="/shop/men"
                          data-index="0"
                          data-group="men"
                          data-color="#ee5f73"
                          data-type="navElements"
                          style={{borderBottomColor: "#ee5f73"}}
                          className="desktop-main"
                          data-reactid="11"
                        >
                          Men
                        </a>
                      </div>
                    </div>
                    <div className="desktop-navContent" data-reactid="168">
                      <div className="desktop-navLink" data-reactid="169">
                        <a
                          href="/shop/women"
                          data-index="1"
                          data-group="women"
                          data-color="#fb56c1"
                          data-type="navElements"
                          style={{borderBottomColor: "#fb56c1"}}
                          className="desktop-main"
                          data-reactid="170"
                        >
                          Women
                        </a>
                      </div>
                    </div>
                    <div className="desktop-navContent" data-reactid="313">
                      <div className="desktop-navLink" data-reactid="314">
                        <a
                          href="/shop/kids"
                          data-index="2"
                          data-group="kids"
                          data-color="#f26a10"
                          data-type="navElements"
                          style={{borderBottomColor:"#f26a10"}}
                          className="desktop-main"
                          data-reactid="315"
                        >
                          Kids
                        </a>
                      </div>
                    </div>
                    <div className="desktop-navContent" data-reactid="477">
                      <div className="desktop-navLink" data-reactid="478">
                        <a
                          href="/shop/home-living"
                          data-index="3"
                          data-group="home-&amp;-living"
                          data-color="#f2c210"
                          data-type="navElements"
                          style={{borderBottomColor:"#f2c210"}}
                          className="desktop-main"
                          data-reactid="479"
                        >
                          Home &amp; Living
                        </a>
                      </div>
                    </div>
                    <div className="desktop-navContent" data-reactid="640">
                      <div className="desktop-navLink" data-reactid="641">
                        <a
                          href="/personal-care"
                          data-index="4"
                          data-group="beauty"
                          data-color="#0db7af"
                          data-type="navElements"
                          style={{borderBottomColor:"#0db7af"}}
                          className="desktop-main"
                          data-reactid="642"
                        >
                          Beauty
                        </a>
                      </div>
                    </div>
                    <div className="desktop-navContent" data-reactid="802">
                      <div className="desktop-navLink" data-reactid="803">
                        <a
                          href="/studio/home"
                          data-index="0"
                          data-group="studio"
                          data-color="#ff3f6c"
                          data-type="navElements"
                          style={{borderBottomColor:"#ff3f6c"}}
                          className="desktop-main"
                          data-reactid="804"
                        >
                          Studio
                        </a>
                        <span className="desktop-newNavLink" data-reactid="805">
                          <sup data-reactid="807">new</sup>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
                <div className="desktop-actions" data-reactid="818">
                  <div className="desktop-user" data-reactid="819">
                    <div className="desktop-userIconsContainer" data-reactid="820">
                      <span
                        className="myntraweb-sprite desktop-iconUser sprites-headerUser"
                        data-reactid="821"
                      ></span>
                      <span className="desktop-userTitle" data-reactid="822">
                        Profile
                      </span>
                    </div>
                  </div>
                  <a
                    href="/wishlist"
                    className="desktop-wishlist"
                    data-reactid="862"
                  >
                    <span
                      className="myntraweb-sprite desktop-iconWishlist sprites-headerWishlist"
                      data-reactid="863"
                    ></span>
                    <span className="desktop-userTitle" data-reactid="864">
                      Wishlist
                    </span>
                  </a>
                  <a
                    href="/checkout/cart"
                    className="desktop-cart"
                    data-reactid="865"
                  >
                    <span
                      className="myntraweb-sprite desktop-iconBag sprites-headerBag"
                      data-reactid="866"
                    ></span>
                    <span
                      className="desktop-badge 
                    desktop-grey"
                      data-reactid="867"
                    ></span>
                    <span className="desktop-userTitle" data-reactid="868">
                      Bag
                    </span>
                  </a>
                </div>
                <div className="desktop-query" data-reactid="869">
                  <input
                    placeholder="Search for products, brands and more"
                    className="desktop-searchBar"
                    value=""
                    data-reactid="870"
                  />
                  <a className="desktop-submit" href="#">
                    <span
                      className="myntraweb-sprite desktop-iconSearch sprites-search"
                      data-reactid="872"
                    ></span>
                  </a>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
