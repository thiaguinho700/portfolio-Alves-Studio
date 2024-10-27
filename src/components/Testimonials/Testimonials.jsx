import React from "react";
import "./testiminials.css";
import Data from "./Data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <srction className="testimonial container section">
      <h2 className="section__title">My clientes say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        spaceBetween={24}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map((item) => {
          return (
            <SwiperSlide className="testimonial__card" key={item.id}>
              <img src={item.image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{item.title}</h3>
              <p className="testimonial__description">{item.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </srction>
  );
};

export default Testimonials;
