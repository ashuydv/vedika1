import React from "react";
import Slider from "react-slick";
import scoopwhoop from "../assets/images/scoopwhoop.png";
import yourstory from "../assets/images/yourstory.png";
import startuptalky from "../assets/images/startuptalky.png";
import bbc from "../assets/images/bbc.png";

export const Feature = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    speed: 10000,
    arrows: false,
    dots: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="feature">
      <section class="text-gray-400 body-font bg-gray-900">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full">
            <div class="lg:w-1/5 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Featured In
              </h1>
              <div class="h-1 w-20 bg-gradient-to-br from-yellow-500 to-pink-500 rounded"></div>
            </div>
            <div class="lg:w-4/5 overflow-hidden">
              <Slider {...settings}>
                <div class="px-1">
                  <div class="px-2">
                    <img
                      alt="team"
                      class="w-60 bg-gray-100 object-cover object-center flex-shrink-0 rounded "
                      src={scoopwhoop}
                    />
                  </div>
                </div>
                <div class="px-1">
                  <div class="px-2">
                    <img
                      alt="team"
                      class=" w-60 bg-gray-100 object-cover object-center flex-shrink-0 rounded "
                      src={startuptalky}
                    />
                  </div>
                </div>
                <div class="px-1">
                  <div class="px-2">
                    <img
                      alt="team"
                      class=" w-60 bg-gray-100 object-cover object-center flex-shrink-0 rounded "
                      src={bbc}
                    />
                  </div>
                </div>
                <div class="px-1">
                  <div class="px-2">
                    <img
                      alt="team"
                      class=" w-60 bg-gray-100 object-cover object-center flex-shrink-0 rounded "
                      src={yourstory}
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
