import React from "react";
import "./Sidebar.css";

export default function Sidebar({ filterItem, setFilterItem }) {
  const handleChange = (slug) => {
    const copyProducts = [...filterItem.brand];
    const modifiedProducts = copyProducts.map((product) => {
      if (slug === product.name) {
        product.checked = !product.checked;
      }

      return product;
    });
    // console.log("====================================", modifiedProducts);

    setFilterItem({ ...filterItem, brand: modifiedProducts });
    // setProducts(modifiedProducts);
  };
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
                setFilterItem({ ...filterItem, gender: e.target.value })
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
                setFilterItem({ ...filterItem, gender: e.target.value })
              }
            />{" "}
            &nbsp; Women
          </li>
        </ul>

        <ul>
          <h2>Brands</h2>
          {/* <span class="search-icon"><FaSearch /></span> */}
          {filterItem.brand.map((item) => (
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
                setFilterItem({
                  ...filterItem,
                  pricerange: !filterItem.pricerange,
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
