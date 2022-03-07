import React from 'react'
import "./Sidebar.css"
import {
  FaSearch
} from "react-icons/fa";

export default function Sidebar() {
  return (
    
      <div className="sidebar"> 
      <div className="sidebarWrapper"> 
  
      
        <ul>
          <h2>Filters</h2>
          <li><input type="radio" name="male" id="male" /> &nbsp; Men</li>
          <li><input type="radio" name="female" id="female" /> &nbsp; Women</li>

        </ul>
        
        <ul>
        <h2>Brands</h2>
        <span class="search-icon"><FaSearch /></span>
          <li><input type="checkbox" name="Roadster" id="Roadster" /> Roadster</li>
          <li><input type="checkbox" name="HIGHLANDER" id="HIGHLANDER" /> High Lander</li>
          <li><input type="checkbox" name="SASSAFRAS" id="SASSAFRAS" /> SASSAFRAS</li>
         
        </ul>
        
        <ul>
        <h2>Price</h2>
        <li><input type="checkbox" name="250" id="250" /> Rs. 250 to Rs. 500 <small>(1000)</small></li>
        <li><input type="checkbox" name="800" id="800" /> Rs. 800 to Rs. 1500  <small>(1700)</small></li>
        </ul>
        
        {/* <ul>
        <h2>Color</h2>
        <span class="search-icon"><FaSearch /></span>
        <li><input type="checkbox" name="" id="" /> Blue <small>(1600)</small></li>
        <li><input type="checkbox" name="" id="" /> White <small>(1900)</small></li>
        <li><input type="checkbox" name="" id="" /> Black <small>(2600)</small></li>
        <li><input type="checkbox" name="" id="" /> Green <small>(3680)</small></li>
        <li><input type="checkbox" name="" id="" /> NavyBlue <small>(200)</small></li>
        <li><input type="checkbox" name="" id="" /> pink <small>(170)</small></li>
        </ul>
         */}
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
  )
}
