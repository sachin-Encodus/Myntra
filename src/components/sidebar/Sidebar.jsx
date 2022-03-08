import React, { useContext, useEffect } from "react";
import { Product } from "../../App";
import { data } from "../../constant/data";
import "./Sidebar.css";

export default function Sidebar() {
  const { state, dispatch } = useContext(Product);
  const handleChange = (slug) => {
    const copyProducts = [...state.filterData.brand];
    const modifiedProducts = copyProducts.map((product) => {
      if (slug === product.name) {
        product.checked = !product.checked;
      }

      return product;
    });
    // console.log("====================================", modifiedProducts);

    dispatch({
      type: "filterData",
      payload: { ...state.filterData, brand: modifiedProducts },
    });
    // setProducts(modifiedProducts);
  };

  useEffect(() => {
    if (state.filterData.gender !== null) {
      const setGender = data.filter(
        (i) => i.gender === state.filterData.gender
      );

      dispatch({ type: "product", payload: setGender });
    }

    if (state.filterData.brand.some((e) => e.checked === true)) {
      const check = state.filterData.brand
        .filter((i) => i.checked === true)
        .map((p) => p.name);
      const brandName = state.product.filter((t) => check.includes(t.name));
      dispatch({ type: "product", payload: brandName });

      console.log(state.product.filter((t) => check.includes(t.name)));
    }
    if (state.filterData.pricerange) {
      const SetPriceRange = state.product.filter(
        (e) => e.price >= 600 && e.price <= 1000
      );
      dispatch({ type: "product", payload: SetPriceRange });

      // console.log("=============price", SetPriceRange);
    }
    // var arr1 = [1, 2, 3, 4],
    //   arr2 = [2, 4],
    //   res = arr1.filter((item) => arr2.includes(item));
    // console.log(res);
  }, [state.filterData]);
  console.log("=========>>>>>>>>>xxxxxxxxxxx", state.filterData);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul>
          <h2>Filters</h2>
          <li>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={(e) =>
                dispatch({
                  type: "filterData",
                  payload: { ...state.filterData, gender: e.target.value },
                })
              }
            />{" "}
            &nbsp; Men
          </li>
          <li>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(e) =>
                dispatch({
                  type: "filterData",
                  payload: { ...state.filterData, gender: e.target.value },
                })
              }
            />{" "}
            &nbsp; Women
          </li>
        </ul>

        <ul>
          <h2>Brands</h2>
          {/* <span class="search-icon"><FaSearch /></span> */}
          {state.filterData.brand.map((item) => (
            <li key={item.name}>
              <input
                type="checkbox"
                name="brand"
                id={item.name}
                onChange={() => handleChange(item.name)}
              />
              {item.name}
            </li>
          ))}
          {/* 
          <li>
            <input type="checkbox" name="HIGHLANDER" id="HIGHLANDER" /> High
            Lander
          </li>
          <li>
            <input type="checkbox" name="SASSAFRAS" id="SASSAFRAS" /> SASSAFRAS
          </li> */}
        </ul>

        <ul>
          <h2>Price</h2>

          <li>
            <input
              type="checkbox"
              name="800"
              id="800"
              onChange={(e) =>
                dispatch({
                  type: "filterData",
                  payload: {
                    ...state.filterData,
                    pricerange: !state.filterData.pricerange,
                  },
                })
              }
            />{" "}
            Rs. 600 to Rs. 1000
          </li>
        </ul>

        {/* <ul>
        <h2>Color</h2>
        {/* <span class="search-icon"><FaSearch /></span> */}
        {/* <li><input type="checkbox" name="" id="" /> Blue <small>(1600)</small></li>
        <li><input type="checkbox" name="" id="" /> White <small>(1900)</small></li>
        <li><input type="checkbox" name="" id="" /> Black <small>(2600)</small></li>
        <li><input type="checkbox" name="" id="" /> Green <small>(3680)</small></li>
        <li><input type="checkbox" name="" id="" /> NavyBlue <small>(200)</small></li>
        <li><input type="checkbox" name="" id="" /> pink <small>(170)</small></li>
        </ul> */}
        {/* <ul>
        <h2>Discount Range</h2>
          <li><input type="radio" name="" id="" /> 10% and above</li>
          <li><input type="radio" name="" id="" /> 20% and above</li>
          <li><input type="radio" name="" id="" /> 30% and above</li>
          <li><input type="radio" name="" id="" /> 40% and above</li>
          <br />
        </ul> */}
      </div>
    </div>
  );
}
