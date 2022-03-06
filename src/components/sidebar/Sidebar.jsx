import React from 'react'
import "./Sidebar.css"


export default function Sidebar() {
  return (
    
      <div className="sidebar"> 
      <div className="sidebarWrapper"> 
        <ul>
          <h2>Filters</h2>
          <li><input type="radio" name="" id="" /> &nbsp; Men</li>
          <li><input type="radio" name="" id="" /> &nbsp; Women</li>
          <li><input type="radio" name="" id="" /> &nbsp; Boys</li>
          <li><input type="radio" name="" id="" /> &nbsp; Girls</li>
        </ul>
        
        <ul>
        <h2>Brands</h2>
        {/* <span class="search-icon"><FaSearch /></span> */}
          <li><input type="checkbox" name="" id="" /> Roadster</li>
          <li><input type="checkbox" name="" id="" /> Louis Philippe</li>
          <li><input type="checkbox" name="" id="" /> Spykar</li>
          <li><input type="checkbox" name="" id="" /> Allen Solly</li>
          <li><input type="checkbox" name="" id="" /> Mufti</li>
        </ul>
        
        <ul>
        <h2>Price</h2>
        <li><input type="checkbox" name="" id="" /> Rs. 250 to Rs. 500 <small>(1000)</small></li>
        <li><input type="checkbox" name="" id="" /> Rs. 3 to Rs.  <small>(1700)</small></li>
        </ul>
        
        <ul>
        <h2>Color</h2>
        {/* <span class="search-icon"><FaSearch /></span> */}
        <li><input type="checkbox" name="" id="" /> Blue <small>(1600)</small></li>
        <li><input type="checkbox" name="" id="" /> White <small>(1900)</small></li>
        <li><input type="checkbox" name="" id="" /> Black <small>(2600)</small></li>
        <li><input type="checkbox" name="" id="" /> Green <small>(3680)</small></li>
        <li><input type="checkbox" name="" id="" /> NavyBlue <small>(200)</small></li>
        <li><input type="checkbox" name="" id="" /> pink <small>(170)</small></li>
        </ul>
        
        <ul>
        <h2>Discount Range</h2>
          <li><input type="radio" name="" id="" /> 10% and above</li>
          <li><input type="radio" name="" id="" /> 20% and above</li>
          <li><input type="radio" name="" id="" /> 30% and above</li>
          <li><input type="radio" name="" id="" /> 40% and above</li>
          <br />
        </ul>
      </div> 
    </div>
  )
}
