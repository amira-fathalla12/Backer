import React, { useEffect, useState } from 'react';
import '../App.css';

const ProductsSection = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"); 
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error("Error fetching the meals:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <section className="products container" id="products">
      <div className="heading">
        <h2>Our Top Selling Products</h2>
        <p>
          It takes a lot of heart and hard work at every step to create the best
          Bakery possible, and we know it takes a lot of grit to keep your own
          grid going.
        </p>
      </div>
      <div className="product-content">
        {meals.map(({ strMeal, strMealThumb, idMeal }) => (
          <div className="product-box" key={idMeal}>
            <i className='bx bx-heart heart-icon'></i>
            <img src={strMealThumb} alt={strMeal} />
            <p>Available</p>
            <h2>{strMeal}</h2>
            <div className="product-info">
              <span>Price TBD</span>
              <i className='bx bx-shopping-bag'></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
