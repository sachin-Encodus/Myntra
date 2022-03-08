import React from "react";
import "./Detail.css";
import { FaStar,FaRegHeart,FaShoppingBag,FaOpencart } from "react-icons/fa";

const Detail = ({ data }) => {
  console.log("====================================", data);
  const { name, price, id, image, cutprice, desc, discount, size, buyers } =
    data;

  return (
    <>
      <main className="pdp-pdp-container  ">
        <div className="breadcrumbs-container display-none">
          <a href="/" className="breadcrumbs-link">
            Home
          </a>
          <span className="breadcrumbs-separator">/</span>
          <a href="/clothing" className="breadcrumbs-link">
            Clothing
          </a>
          <span className="breadcrumbs-separator">/</span>
          <a href="/men-clothing" className="breadcrumbs-link">
            Men Clothing
          </a>
          <span className="breadcrumbs-separator">/</span>
          <a href="/shirts" className="breadcrumbs-link">
            Shirts
          </a>
          <span className="breadcrumbs-separator">/</span>
          <a
            href="/roadster-shirts"
            className="breadcrumbs-bold-link breadcrumbs-link"
          >
            Roadster Shirts
          </a>
          <span className="breadcrumbs-bold-separator breadcrumbs-separator">
            &gt;
          </span>
          <a
            href="/roadster"
            className="breadcrumbs-bold-link breadcrumbs-link"
          >
            More By Roadster
          </a>
        </div>
        <div className="pdp-details common-clearfix">
          <div className="image-grid-container common-clearfix">
            <div className="image-grid-col50 display-none">
              <div className="image-grid-imageContainer">
                <div
                  className="image-grid-image"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="image-grid-skeletonLoader"></div>
              </div>
            </div>
            <div className="image-grid-col50">
              <div className="image-grid-imageContainer">
                <div
                  className="image-grid-image"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="image-grid-similarColorsCta undefined">
                  <span className="myn-spr image-grid-similarColorsIcon sprites-similarProductsIcon"></span>
                  <FaOpencart style={{verticalAlign: "middle",marginLeft: "10px"}}/>
                  <span className="image-grid-iconText"> VIEW SIMILAR</span>
                </div>
                <div className="image-grid-skeletonLoader"></div>
              </div>
            </div>
          </div>
          <div className="pdp-description-container">
            <div className="pdp-price-info">
              <span className="pdp-title">{name}</span>
              <br />
              <span className="pdp-name">{desc}</span>
              <br />
              <br />
              <div className="index-overallRatingContainer">
                <div className="index-overallRating">
                  <div>
                    4.2{" "}
                    <FaStar style={{ color: "#72bfbc", fontSize: "13px" }} />{" "}
                    &nbsp;{" "}
                  </div>
                  <span className="myn-spr index-starIcon index-productRatingsExcellentIcon sprites-productRatingsExcellentIcon"></span>
                  <div className="index-separator"> |</div>
                  <div className="index-ratingsCount">{buyers}</div>
                </div>
              </div>
              <p className="pdp-discount-container">
                <span className="pdp-price" tabindex="0">
                  <strong>Rs. {price}</strong>
                </span>
                <div className="pdp-mrp-verbiage" tabindex="0">
                  <div>
                    <b>Price Details</b>
                  </div>
                  <div>
                    <span className="pdp-mrp-verbiage-amt"></span>
                  </div>
                  <div>(Incl. of all taxes)</div>
                  <hr className="display-none" />
                  <div>
                    <span className="pdp-mrp-verbiage-amt">{discount}</span>
                  </div>
                  <div>
                    <b>Selling Price</b>
                    <span className="pdp-mrp-verbiage-amt">Rs. 1484</span>
                  </div>
                  <div style={{ margin: "0px" }}>(Incl. of all taxes)</div>
                </div>
                <span className="pdp-mrp">
                  <s>Rs. {cutprice}</s>
                </span>
                <span className="pdp-discount">(45% OFF)</span>
              </p>
              <p className="pdp-selling-price">
                <span className="pdp-vatInfo">inclusive of all taxes</span>
              </p>
            </div>

            <div
              className="size-buttons-size-container"
              id="sizeButtonsContainer"
            >
              <div className="size-buttons-size-header">
                <h4 className="size-buttons-select-size">Select Size</h4>
                <span className="size-buttons-size-chart">
                  <button className="size-buttons-show-size-chart">
                    Size Chart
                  </button>
                  <span className="size-buttons-arrow"></span>
                </span>
              </div>
              <div className="size-buttons-size-buttons">
                <div className="size-buttons-tipAndBtnContainer">
                  <div className="size-buttons-buttonContainer">
                    <button className="size-buttons-size-button size-buttons-size-button-default">
                      <span className="size-buttons-size-strike-hide"></span>
                      <p className="size-buttons-unified-size">38</p>
                    </button>
                    <span className="size-buttons-inventory-left-hidden size-buttons-inventory-left">
                      Hide
                    </span>
                  </div>
                  <div className="size-buttons-sizeTip">
                    <div className="size-buttons-sizeTipMeta">
                      <div className="size-buttons-bodymeasure">
                        <span className="size-buttons-measurementType">
                          Garment
                        </span>
                        <span className="size-buttons-measurementName">
                          Chest - 39.5in
                        </span>
                      </div>
                      <div className="size-buttons-sizeChartInfo">
                        <div>
                          Slim fit
                          <br />
                          The model (height 6') is wearing a size 40
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="size-buttons-tipAndBtnContainer">
                  <div className="size-buttons-buttonContainer">
                    <button className="size-buttons-size-button size-buttons-size-button-default">
                      <span className="size-buttons-size-strike-hide"></span>
                      <p className="size-buttons-unified-size">40</p>
                    </button>
                    <span className="size-buttons-inventory-left-hidden size-buttons-inventory-left">
                      Hide
                    </span>
                  </div>
                  <div className="size-buttons-sizeTip">
                    <div className="size-buttons-sizeTipMeta">
                      <div className="size-buttons-bodymeasure">
                        <span className="size-buttons-measurementType">
                          Garment
                        </span>
                        <span className="size-buttons-measurementName">
                          Chest - 42.25in
                        </span>
                      </div>
                      <div className="size-buttons-sizeChartInfo">
                        <div>
                          Slim fit
                          <br />
                          The model (height 6') is wearing a size 40
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="size-buttons-tipAndBtnContainer">
                  <div className="size-buttons-buttonContainer">
                    <button className="size-buttons-size-button size-buttons-size-button-default">
                      <span className="size-buttons-size-strike-hide"></span>
                      <p className="size-buttons-unified-size">42</p>
                    </button>
                    <span className="size-buttons-inventory-left-hidden size-buttons-inventory-left">
                      Hide
                    </span>
                  </div>
                  <div className="size-buttons-sizeTip">
                    <div className="size-buttons-sizeTipMeta">
                      <div className="size-buttons-bodymeasure">
                        <span className="size-buttons-measurementType">
                          Garment
                        </span>
                        <span className="size-buttons-measurementName">
                          Chest - 45.25in
                        </span>
                      </div>
                      <div className="size-buttons-sizeChartInfo">
                        <div>
                          Slim fit
                          <br />
                          The model (height 6') is wearing a size 40
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="size-buttons-tipAndBtnContainer">
                  <div className="size-buttons-buttonContainer">
                    <button className="size-buttons-size-button size-buttons-size-button-default">
                      <span className="size-buttons-size-strike-hide"></span>
                      <p className="size-buttons-unified-size">44</p>
                    </button>
                    <span className="size-buttons-inventory-left-hidden size-buttons-inventory-left">
                      Hide
                    </span>
                  </div>
                  <div className="size-buttons-sizeTip">
                    <div className="size-buttons-sizeTipMeta">
                      <div className="size-buttons-bodymeasure">
                        <span className="size-buttons-measurementType">
                          Garment
                        </span>
                        <span className="size-buttons-measurementName">
                          Chest - 48.25in
                        </span>
                      </div>
                      <div className="size-buttons-sizeChartInfo">
                        <div>
                          Slim fit
                          <br />
                          The model (height 6') is wearing a size 40
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div
                className="pdp-action-container pdp-fixed
               "
              >
                <div
                  className="pdp-add-to-bag pdp-button pdp-flex pdp-center
                  "
                >
                  <span className="myn-spr pdp-whiteBag sprites-whiteBag pdp-flex pdp-center"></span>
                  <FaShoppingBag/> &nbsp; ADD TO BAG
                </div>
                <div
                  className=" pdp-add-to-wishlist pdp-button pdp-add-to-wishlist pdp-button pdp-flex pdp-center
                  "
                >
                  <span className="myn-spr pdp-notWishlistedIcon sprites-notWishlisted pdp-flex pdp-center "></span>
                  <span className="mobile-wishlist"> <FaRegHeart/> &nbsp; WISHLIST</span>
                </div>
              </div>
            </div>

            <div>
              <div className="pincode-deliveryContainer">
                <h4 className="display-none">
                  Delivery Options{" "}
                  <span className="myn-spr pincode-deliveryOptionsIcon sprites-deliveryOptionsIcon"></span>
                </h4>
                <div className="Address-switcher-container display-none">
                  <div className="Address-address-box Address-pincode-input Address-pdp-box">
                    <input type="tel" placeholder="Enter a PIN code" value="" />
                    <button
                      type="submit"
                      className="Address-address-button"
                      style={{ color: "rgb(191, 192, 198)" }}
                    >
                      CHECK
                    </button>
                  </div>
                </div>
                <p className="pincode-enterPincode display-none">
                  Please enter PIN code to check delivery time &amp; Pay on
                  Delivery Availability
                </p>

                <ul className="pincode-serviceability-list"></ul>
              </div>
            </div>
            <div>
              <div className="meta-container display-footer-block">
                <div className="meta-info">
                  <div className="meta-desc">100% Original Products</div>
                </div>
                <div className="meta-info">
                  <div className="meta-desc">
                    Pay on delivery might be available
                  </div>
                </div>
                <div className="meta-info">
                  <div className="meta-desc">
                    Easy 30 days returns and exchanges
                  </div>
                </div>
                <div className="meta-info">
                  <div className="meta-desc">
                    Try &amp; Buy might be available
                  </div>
                </div>
              </div>
            </div>
            <div className="pdp-offers-container display-none">
              <h4>
                BEST OFFERS{" "}
                <span className="myn-spr pdp-offers-similarColorsIcon sprites-bestOfferIcon"></span>
              </h4>
              <div>
                <div className="pdp-offers-offer">
                  <div>
                    <div className="pdp-offers-offerTitle">
                      <b>
                        <span className="pdp-offers-price">
                          Best Price: Rs. 505
                        </span>
                      </b>
                    </div>
                    <ul className="pdp-offers-offerDesc">
                      <li>
                        <div className="pdp-offers-bullet"></div>
                        <div className="pdp-offers-labelMarkup">
                          <span className="">
                            Orders above Rs. 2499 (only on first purchase)
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="pdp-offers-bullet"></div>
                        <div className="pdp-offers-labelMarkup">
                          <span className="pdp-offers-boldText">MYNTRA400</span>
                        </div>
                      </li>
                      <li>
                        <div className="pdp-offers-bullet"></div>
                        <div className="pdp-offers-labelMarkup">
                          <span className="">
                            {" "}
                            Rs. 238 off (check cart for final savings)
                          </span>
                        </div>
                      </li>
                    </ul>
                    <a
                      className="pdp-offers-linkButton"
                      target="_blank"
                      href="/"
                    >
                      View Eligible Products
                    </a>
                  </div>
                </div>
                <div className="pdp-offers-extraOffer">
                  <div className="pdp-offers-offerLikeBestPrice">
                    <div className="pdp-offers-offerTitle">
                      <b>EMI option available</b>
                    </div>
                    <div className="pdp-offers-offerDesc">
                      <li className="pdp-offers-extraOfferDesc">
                        <div className="pdp-offers-bullet"></div>
                        <div className="pdp-offers-labelMarkup">
                          EMI starting from Rs.70/month
                        </div>
                      </li>
                    </div>
                    <span className="pdp-offers-linkButton">View Plan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Detail;
