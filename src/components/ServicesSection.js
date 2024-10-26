/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../App.css";

const ServicesSection = () => (
    <section className="services container" id="services">
    <div className="heading">
        <h2>How we Work</h2>
        <p><span>Telephone:</span> +7 700 000 00 00</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="service-content">
        <div className="ser-box">
            <img src="/assets/about1.jfif" alt="Equipment" />
            <p>Equipment</p>
        </div>
        <div className="ser-box">
            <img src="/assets/about2.jfif" alt="Type of bread" />
            <p>Type of bread</p>
        </div>
        <div className="ser-box">
            <img src="/assets/about3.jfif" alt="Take Away" />
            <p>Take Away</p>
        </div>
        <div className="ser-box">
            <img src="/assets/about4.jfif" alt="Pastry" />
            <p>Pastry</p>
        </div>
        <div className="ser-box">
            <img src="/assets/about1.jfif" alt="Bakery Variety" />
            <p>Bakery Variety</p>
        </div>
    </div>
    <a href="#" className="button">
        <span>Connect</span>
    </a>
</section>
);

export default ServicesSection;
