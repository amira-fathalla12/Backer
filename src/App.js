/* eslint-disable react/jsx-no-undef */
// App.js - The main component that sets up routing for the application.
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeSection from './components/HomeSection';
import Header from './components/header';
import ServicesSection from './components/ServicesSection';
import AboutUs from './components/about';
import ProductsSection from './components/recipes';
import ReviewsSection from './components/Reviwes';
import ConnectUs from './components/connectus';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <HomeSection />
      <ServicesSection />
      <AboutUs />
      <ProductsSection />
      <ReviewsSection />
      <ConnectUs />
    </>
  );
}

export default App;
