import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css';

const reviews = [
  {
    imgSrc: '/assets/pic-1.png',
    name: 'Jony Blue',
    title: 'The taste of bread is stunning, subtle and smooth flavor.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, in dolores rerum provident tenetur enim sunt! Obcaecati minus, vel nihil veritatis consequatur illum ad necessitatibus ipsam optio odio, maxime facere?',
  },
  {
    imgSrc: '/assets/pic-2.png',
    name: 'Marya Blue',
    title: 'The taste of bread is stunning, subtle and smooth flavor.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, in dolores rerum provident tenetur enim sunt! Obcaecati minus, vel nihil veritatis consequatur illum ad necessitatibus ipsam optio odio, maxime facere?',
  },
  {
    imgSrc: '/assets/pic-3.png',
    name: 'Charlie',
    title: 'The taste of bread is stunning, subtle and smooth flavor.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, in dolores rerum provident tenetur enim sunt! Obcaecati minus, vel nihil veritatis consequatur illum ad necessitatibus ipsam optio odio, maxime facere?',
  },
];

const ReviewsSection = () => (
  <section className="review container" id="review">
    <div className="heading">
      <h2>Customer's Reviews</h2>
    </div>
    <Swiper spaceBetween={30} pagination={{ clickable: true }} className="mySwiper">
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="review-box">
            <img src={review.imgSrc} alt={review.name} />
            <h2>{review.name}</h2>
            <span>{review.title}</span>
            <p>{review.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default ReviewsSection;
