import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Correct imports for Swiper v8+
import "swiper/css";
import "swiper/css/pagination";

const testimonialsData = [
  {
    img: "assets/img/testimonials/testimonials-1.jpg",
    name: "Saul Goodman",
    title: "Ceo & Founder",
    rating: 4,
    text: "The team provided exceptional service and delivered the project on time. Their expertise in React and Django was evident throughout.",
  },
  {
    img: "assets/img/testimonials/testimonials-2.jpg",
    name: "Sara Ibrahim",
    title: "Designer",
    rating: 5,
    text: "Working with them was a fantastic experience. They created a responsive and user-friendly interface that exceeded my expectations.",
  },
  {
    img: "assets/img/testimonials/testimonials-3.jpg",
    name: "Jena Karlis",
    title: "Store Owner",
    rating: 3,
    text: "Their attention to detail and ability to solve complex problems was truly impressive. My e-commerce platform now runs seamlessly!",
  },
  {
    img: "assets/img/testimonials/testimonials-4.jpg",
    name: "Saleem Malik",
    title: "Freelancer",
    rating: 5,
    text: "They transformed my vision into reality with a sleek and professional website. I highly recommend their services to anyone in need of web development.",
  },
  {
    img: "assets/img/testimonials/testimonials-5.jpg",
    name: "John Larson",
    title: "Entrepreneur",
    rating: 5,
    text: "The custom features they implemented have taken my business to the next level. Their dedication and skill are unmatched.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="testimonials section accent-background"
    >
      <img
        src="assets/img/testimonials-bg.jpg"
        className="testimonials-bg"
        alt="Testimonials Background"
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]} // Updated imports here
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          pagination={{ clickable: true, type: "bullets" }}
          className="testimonials-swiper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="testimonial-item">
                <img
                  src={testimonial.img}
                  className="testimonial-img"
                  alt={`${testimonial.name}`}
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.title}</h4>
                <div className="stars">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  {testimonial.text}
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
