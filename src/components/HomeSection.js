/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css'
const HomeSection = () => (
  <section className="home container" id="home">
    <div className="home-text">
      <h1>The Best <br /> Tasty pastries.</h1>
      <p>Brew or order a perfect bread based on your mood, Anywhere Anytime.</p>
      <a href="#" className="btn">
        <span>Shop Now</span>
        <i className='bx bx-up-arrow-alt'></i>
      </a>
    </div>
    <img src="/assets/home1.png" alt="Home Bakery" className="home-img" />
  </section>
);
export default HomeSection;
