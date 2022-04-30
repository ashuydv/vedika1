import React from "react";
import Slider from "react-slick";
import raj from "../assets/images/raj.jpg";
import vaibhav from "../assets/images/vaibhav.jpg";
import rchilli from "../assets/images/rchilli.svg";
import mainstreettv from "../assets/images/mainstreettv.png";
import vavoimage from "../assets/images/vavoimage.jfif";
import em from "../assets/images/em.png";
import exhibit from "../assets/images/exhibit.png";
import peakperformer from "../assets/images/peakperformer.webp";

export const Brands = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Brands we've helped ...
            </h1>
            {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p> */}
            <div class="h-1 w-20 mx-auto mt-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded"></div>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={raj}
                />
                <div class="flex-grow">
                  <h2 class="text-white title-font font-medium">Raj Shamani</h2>
                  <p class="text-gray-600">Content Creator</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={vaibhav}
                />
                <div class="flex-grow">
                  <h2 class="text-white title-font font-medium">
                    Vaibhav Sisinity
                  </h2>
                  <p class="text-gray-600">Growth Hacker</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={vavoimage}
                />
                <div class="flex-grow">
                  <h2 class="text-white title-font font-medium">
                    Oskar Blinde
                  </h2>
                  <p class="text-gray-600">Founder</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={rchilli}
                />
                <div class="flex-grow">
                  <h2 class="text-white title-font font-medium">John Doe</h2>
                  <p class="text-gray-600">DevOps</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={exhibit}
                />
                <div class="flex-grow">
                  <h2 class="text-white title-font font-medium">Martin Eden</h2>
                  <p class="text-gray-600">Software Engineer</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={mainstreettv}
                />
                <div class="flex-grow">
                  <h2 class="text-white title-font font-medium">Boris Kitua</h2>
                  <p class="text-gray-600">UX Researcher</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={peakperformer}
                />
                <div class="flex-grow">
                  <h2 class="text-white title-font font-medium">
                    Atticus Finch
                  </h2>
                  <p class="text-gray-600">QA Engineer</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={em}
                />
                <div class="flex-grow">
                  <h2 class="text-white title-font font-medium">Alper Kamu</h2>
                  <p class="text-gray-600">System</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
