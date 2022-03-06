import React from "react";
import "./Itemlist.css";
const ItemList = ({ item }) => {
  return (
    <div>
      {/* <h1>{item.name}</h1> */}
    
          <ul >
            <li class="product-base">
              <div class="product-thumbShim"></div>
              <div class="product-ratingsContainer">
                <span>{item.rating}</span>
                <span class="myntraweb-sprite product-starIcon index-productRatingsExcellentIcon sprites-productRatingsExcellentIcon"></span>
                <div class="product-ratingsCount">
                  <div class="product-separator">|</div>
                  {item.buyers}
                </div>
              </div>
              <a
                target="_blank"
                href="shirts/hm/hm-women-white-oversized-cotton-shirt/15198496/buy"
                style={{ display: "block" }}
              >
                <div class="product-imageSliderContainer">
                  <div
                    class="product-sliderContainer"
                    style={{ display: "block" }}
                  >
                    <div style={{ background: "rgb(255, 237, 243)" }}>
                      <div style={{ height: "280px", width: "100%" }}>
                        <picture
                          class="img-responsive"
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "block",
                          }}
                        >
                          <img
                            src={item.image}
                            class="img-responsive"
                            alt="H&amp;M Women White Oversized Cotton Shirt"
                            title="H&amp;M Women White Oversized Cotton Shirt"
                            style={{ width: "100%", display: "block" }}
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-productMetaInfo">
                  <h3 class="product-brand">{item.name}</h3>
                  <h4 class="product-product">{item.desc}</h4>
                  <h4 class="product-sizes">
                    <span class="product-sizeNoInventoryPresent">
                      {item.size[0]},{" "}
                    </span>
                    <span class="product-sizeNoInventoryPresent">
                      {item.size[1]},{" "}
                    </span>
                    <span class="product-sizeNoInventoryPresent">
                      {item.size[2]},
                    </span>
                    <span class="product-sizeNoInventoryPresent">
                      {item.size[3]}
                    </span>
                  </h4>
                  <div class="product-price">
                    <span>
                      <span class="product-discountedPrice">
                        Rs {item.price}
                      </span>
                      <span class="product-strike">Rs {item.cutprice}</span>
                    </span>
                    <span class="product-discountPercentage">
                      {item.discount}
                    </span>
                  </div>
                </div>
              </a>
              <div class="image-grid-similarColorsCta product-similarItemCta">
                <span class="myntraweb-sprite image-grid-similarColorsIcon sprites-similarProductsIcon"></span>
                <span class="image-grid-iconText">VIEW SIMILAR</span>
              </div>
              <div class="product-actions ">
                <span
                  class="product-wishlistFlex product-actionsButton product-wishlist "
                  style={{ width: "100%", textAlign: "center" }}
                >
                  <span class="myntraweb-sprite product-notWishlistedIcon sprites-notWishlisted"></span>
                </span>
              </div>
              <div class="product-sizeDisplayDiv">
                <div class="product-sizeDisplayHeader">
                  <span>Select a size</span>
                  <span class="myntraweb-sprite product-sizeDisplayRemoveMark sprites-remove"></span>
                </div>
                <div class="product-sizeButtonsContaier">
                  <button class="product-sizeButton">XS</button>
                  <button class="product-sizeButton">S</button>
                  <button class="product-sizeButton">M</button>
                  <button class="product-sizeButton">L</button>
                </div>
              </div>
            </li>
          </ul>
     
    </div>
  );
};

export default ItemList;
