import { useContext, useState } from "react";
import { Product } from "../../App";

import ItemList from "../itemlist/ItemList";
import "./Main.css";
export default function Main() {
  const { state, dispatch } = useContext(Product);

  const Shorting = (val) => {
    // const pricedata1 = data.sort((a, b) => b.price - a.price);
    // setitem([...pricedata1]);
    // console.log("==============xxxxxxxxxxdescending", pricedata1);

    if (val === "descending") {
      const pricedata1 = state.product.sort((a, b) => b.price - a.price);
      dispatch({ type: "product", payload: pricedata1 });
      // setstate.product([...pricedata1]);
      console.log("==============xxxxxxxxxxdescending", pricedata1);
    } else {
      const pricedata2 = state.product.sort((a, b) => a.price - b.price);
      console.log("==============xxxxxxxxxascending", pricedata2);
      dispatch({ type: "product", payload: pricedata2 });
      // setitem([...pricedata2]);
    }
  };
  return (
    <section>
      <div
        className="upperText"
        style={{ width: "100%", visibility: "hidden" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        iure, ex ratione eaque dignissimos recusandae minima veritatis quo
        voluptatem libero dolorem, accusantium consequuntur sed molestiae fugiat
        id laboriosam facilis ullam?
      </div>
      <section class="horizontal-filters-base">
        <div>
          <div class="horizontal-filters-sortContainer">
            <div>
              <div>
                <div class="sort-sortBy">
                  Sort by : <span>Recommended</span>
                  <span class="myntraweb-sprite sort-downArrow sprites-downArrow"></span>
                  <ul class="sort-list">
                    <li>
                      <label class="sort-label ">
                        <input
                          type="radio"
                          name="shorting"
                          id="descending"
                          value="descending"
                          onChange={(e) => Shorting(e.target.value)}
                        />
                        Price: High to Low
                      </label>
                    </li>
                    <li>
                      <label class="sort-label ">
                        <input
                          type="radio"
                          name="shorting"
                          id="ascending"
                          value="ascending"
                          onChange={(e) => Shorting(e.target.value)}
                        />
                        Price: Low to High
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="atsa-base">
            <ul class="atsa-filters">
              <li>
                <label class="">
                  <input type="radio" value="Add-Ons" />
                  <h4 class="atsa-title">Add-Ons</h4>
                  <span class="atsa-downArrow sprites-arrowDownBold myntraweb-sprite"></span>
                </label>
              </li>
              <li>
                <label class="">
                  <input type="radio" value="Better Cotton Initiative" />
                  <h4 class="atsa-title">Better Cotton Initiative</h4>
                  <span class="atsa-downArrow sprites-arrowDownBold myntraweb-sprite"></span>
                </label>
              </li>
              <li>
                <label class="">
                  <input type="radio" value="Bundles" />
                  <h4 class="atsa-title">Bundles</h4>
                  <span class="atsa-downArrow sprites-arrowDownBold myntraweb-sprite"></span>
                </label>
              </li>
              <li>
                <label class="">
                  <input type="radio" value="Character" />
                  <h4 class="atsa-title">Character</h4>
                  <span class="atsa-downArrow sprites-arrowDownBold myntraweb-sprite"></span>
                </label>
              </li>
              <li>
                <label class="">
                  <input type="radio" value="Collar" />
                  <h4 class="atsa-title">Collar</h4>
                  <span class="atsa-downArrow sprites-arrowDownBold myntraweb-sprite"></span>
                </label>
              </li>
              <li>
                <label class="">
                  <input type="radio" value="Country of Origin" />
                  <h4 class="atsa-title">Country of Origin</h4>
                  <span class="atsa-downArrow sprites-arrowDownBold myntraweb-sprite"></span>
                </label>
              </li>
              <li>
                <label class="">
                  <input type="radio" value="Fabric" />
                  <h4 class="atsa-title">Fabric</h4>
                  <span class="atsa-downArrow sprites-arrowDownBold myntraweb-sprite"></span>
                </label>
              </li>
              <li>
                <div class="atsa-more">
                  <span>+ 17 more</span>
                </div>
              </li>
            </ul>
            <div class="atsa-atsaFiltersOptionCtn">
              <ul class="atsa-values atsa-hidden"></ul>
            </div>
          </div>
        </div>
        <div class="filter-summary-selectedFilterContainer filter-summary-hidden">
          <ul class="filter-summary-filterList"></ul>
        </div>
      </section>
      <ul class="grid-wrapper">
        {state.product.map((item) => (
          <ItemList item={item} />
        ))}
      </ul>
    </section>
  );
}
