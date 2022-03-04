import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className='container'>
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">Myntra</label>
      <ul>
        <li><a class="active" href="#">Home</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className='search'>
          <input type="search" name="" id="" />
          <a href="#" className='submit'>

          </a>
      </div>
    </nav>
  </header>
  )
}

export default Navbar