import React, { useState } from "react";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
// import Modal from 'react-modal';
import Bag from "./../bag/Bag";
import Modal from "../model/Model";
import { useNavigate } from "react-router-dom";
const Navbar = ({
  search,
  SetFilterData,
  setSearch,
  wishList,
  setWishList,
}) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  console.log("====================================", wishList.length);

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

              <a
                href="/home"
                className="desktop-view"
                style={{ textDecoration: "none" }}
              >
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
                      style={{ borderBmobileottomColor: "#ee5f73" }}
                      className="dsk-imp -view"
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
              <div className="wishlist-icon">
                <span className="myn-spr wishlist-icon spr-wishlist"></span>
                <a
                  href="#"
                  className="user-title mobile-view"
                  data-reactid="864"
                >
                  <span>Wishlist</span>
                </a>
                <div className="wishlist-modal">
                  {wishList.length > 0 ? (
                    <div style={{ overflow: "scroll" }}>
                      {wishList.map((i) => (
                        <div
                          onClick={() => navigate("/detail", { state: i })}
                          key={i.id}
                          style={{ width: "100%" }}
                        >
                          <div
                            style={{
                              display: "flex",
                              marginTop: 10,
                              marginBottom: 10,
                            }}
                          >
                            <img
                              src={i.image}
                              style={{ width: 100, height: "auto" }}
                            />
                            <div style={{ padding: 10 }}>
                              <p style={{ color: "#000", marginTop: 20 }}>
                                {i.name}
                              </p>
                              <p style={{ color: "#000", marginTop: 20 }}>
                                {i.desc}
                              </p>
                              <p style={{ color: "#000", marginTop: 20 }}>
                                {i.price}
                              </p>
                              <button
                                onClick={() =>
                                  setWishList(
                                    wishList.filter((p) => p.id !== i.id)
                                  )
                                }
                                style={{
                                  border: "none",
                                  borderRadius: 10,
                                  width: 150,
                                  height: 50,
                                  backgroundColor: "#FF3E6C",
                                  fontSize: 16,
                                  color: "#FFFFFF",
                                }}
                              >
                                remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        height: 200,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <h2 style={{ color: "#000000" }}>
                        Add Item to Wishlist ❤️
                      </h2>
                    </div>
                  )}
                </div>
              </div>

              <a href="#" className="dsk-cart" data-reactid="865">
                <span
                  className="myn-spr icon-bag spr-bag"
                  data-reactid="866"
                ></span>
                <span
                  className="dsk-bdg 
                    dsk-gry"
                  data-reactid="867"
                ></span>
                <span
                  onClick={() => setModal(true)}
                  className="user-title mobile-view"
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
