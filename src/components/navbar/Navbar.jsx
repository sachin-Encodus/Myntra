import React, { useState } from "react";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
// import Modal from 'react-modal';
import Bag from "./../bag/Bag";
import Modal from "../model/Model";
const Navbar = ({ search, SetFilterData, setSearch }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal ? <Modal setModal={setModal} /> : null}

      <div style={{ zIndex: 3 }}>
        <header className="container">
          <div className="dsk-bd" data-reactid="4">
            <div className="logo " data-reactid="5">
              <a href="/" className="myn-spr myn-logo header-logo mobile-view">
                &nbsp;
              </a>

              <a href="/home" className="desktop-view">
                <BiMenu /> &nbsp; Myntra
              </a>
            </div>
            <nav className="navbar">
              <div className="nav-links">
                <div className="nav-content mobile-view">
                  <div className="dsk-nvl mobile-view">
                    <a
                      href="/"
                      data-color="#fb56c1"
                      data-type="navElements"
                      style={{ borderBottomColor: "#ee5f73" }}
                      className="dsk-imp mobile-view"
                    >
                      Men
                    </a>
                  </div>
                </div>
                <div className="nav-content mobile-view">
                  <div className="dsk-nvl mobile-view">
                    <a
                      href="/"
                      data-color="#fb56c1"
                      data-type="navElements"
                      style={{ borderBottomColor: "#ee5f73" }}
                      className="dsk-imp mobile-view"
                    >
                      Women
                    </a>
                  </div>
                </div>
                <div className="nav-content mobile-view">
                  <div className="dsk-nvl mobile-view">
                    <a
                      href="/"
                      data-color="#fb56c1"
                      data-type="navElements"
                      style={{ borderBottomColor: "#ee5f73" }}
                      className="dsk-imp mobile-view"
                    >
                      Kids
                    </a>
                  </div>
                </div>
                <div className="nav-content mobile-view">
                  <div className="dsk-nvl mobile-view">
                    <a
                      href="/"
                      data-color="#fb56c1"
                      data-type="navElements"
                      style={{ borderBottomColor: "#ee5f73" }}
                      className="dsk-imp mobile-view"
                    >
                      Home &amp; Living
                    </a>
                  </div>
                </div>
                <div className="nav-content mobile-view">
                  <div className="dsk-nvl mobile-view">
                    <a
                      href="/"
                      data-color="#fb56c1"
                      data-type="navElements"
                      style={{ borderBottomColor: "#ee5f73" }}
                      className="dsk-imp mobile-view"
                    >
                      Beauty
                    </a>
                  </div>
                </div>
                <div className="nav-content mobile-view">
                  <div className="dsk-nvl mobile-view">
                    <a
                      href="/"
                      data-color="#fb56c1"
                      data-type="navElements"
                      style={{ borderBottomColor: "#ee5f73" }}
                      className="dsk-imp mobile-view"
                    >
                      Studio
                    </a>
                    <span className="new-link">
                      <sup className="mobile-view">new</sup>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
            <div className="dsk-act">
              <div className="dsk-user">
                <div className="user-icon">
                  <span className="myn-spr dsk-icn-user spr-user"></span>
                  <span
                    className="user-title mobile-view"
                    style={{ left: "12px" }}
                  >
                    Profile
                  </span>
                </div>
              </div>
              <a href="/" className="wishlist-icon">
                <span className="myn-spr wishlist-icon spr-wishlist"></span>
                <span className="user-title mobile-view" data-reactid="864">
                  Wishlist
                </span>
              </a>
              <a href="#" className="desktop-cart" data-reactid="865">
                <span
                  className="myn-spr icon-bag spr-bag"
                  data-reactid="866"
                ></span>
                <span
                  className="desktop-badge 
                    desktop-grey"
                  data-reactid="867"
                ></span>
                <span
                  onClick={() => setModal(true)}
                  className="desktop-userTitle mobile-view"
                  data-reactid="868"
                >
                  Bag
                </span>
              </a>
            </div>
            <div className="search-query mobile-view">
              <input
                placeholder="Search for products, brands and more"
                className="search-bar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <a
                onClick={() => SetFilterData()}
                className="query-submit"
                href="#"
              >
                <span className="myn-spr search-icn spr-srch"></span>
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
