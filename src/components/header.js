/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css'

const Header = () => (
  <header>
    <div className="nav container">
      <a href="#" className="logo">BOTTEGA</a>
      <div className="navbar">
        {['Home', 'Services', 'About', 'Recipes', 'Reviews','connect'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
        ))}
      </div>
      <div className="nav-icons">
        <a href="#"><i className='bx bx-user'></i></a>
        <a href="#"><i className='bx bx-shopping-bag'></i></a>
        <div className="menu-icon">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
