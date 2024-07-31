import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
            <div className="logo">
                <h1>UrbanWraps</h1>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#">HOME</a>
                </li>
                <li>
                    <a href="#">MEN</a>
                </li>
                <li>
                    <a href="#">WOMEN</a>
                </li>
                <li>
                    <a href="#">PATCHES</a>
                </li>
                <li>
                    <a href="#">DESIGN MY JACKET</a>
                </li>
            </ul>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button>
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <div className="nav-icons">
                <i className="fa fa-heart"></i>
                <i className="fa fa-shopping-cart"></i>
                <i className="fa fa-user"></i>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
