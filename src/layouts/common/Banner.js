import React from "react";
import Slider from "react-slick";
import { Image } from "../../assets/img/image";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Banner = () => {
  return (
    <div>
      <Slider {...settings}>
        <img src={Image.slider1} alt="" />
        <img src={Image.slider2} alt="" />
        <img src={Image.slider3} alt="" />
      </Slider>
    </div>
  );
};

export default Banner;
