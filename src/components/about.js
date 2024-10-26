/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../App.css";

const AboutUs = () => (
  <section className="about-us container">
    <div className="about-text">
      <h2>About Us</h2>
      <p>
        Welcome to our bakery! We are passionate about creating the finest
        breads and pastries using traditional methods and the freshest
        ingredients. Our mission is to bring joy to your table with every
        bite. Join us in celebrating the art of baking!
      </p>
      <a href="#" className="button">
        <span>Learn More</span>
      </a>
    </div>
    <div className="about-image">
      <img src="/assets/chef.jpg" alt="About Us" />
    </div>
  </section>
);

export default AboutUs;
