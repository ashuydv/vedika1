import React from "react";
import CountUp from "react-countup";

export const Statistics = () => {
  return (
    <div>
      <section class="text-gray-900 bg-gray-100 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/3 w-1/2">
              <div className="border py-4 hover:shadow-lg">
                <div className="text-blue-500 text-5xl mb-3 inline-block">
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">
                  <CountUp delay={2} end={49} />
                  K+
                </h2>
                <p class="leading-relaxed">Twitter Followers</p>
              </div>
            </div>
            <div class="p-4 sm:w-1/3 w-1/2">
              <div className="border py-4 hover:shadow-lg">
                <div className="text-blue-500 text-5xl mb-3 inline-block">
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">
                  <CountUp delay={2} end={85} />
                  K+
                </h2>
                <p class="leading-relaxed">Linkedin Followers</p>
              </div>
            </div>
            <div class="p-4 sm:w-1/3 w-1/2 ">
              <div className="border py-4 hover:shadow-lg">
                <div className="text-pink-500 text-5xl mb-3 inline-block">
                  <i class="fa-brands fa-instagram"></i>
                </div>
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">
                  <CountUp delay={2} end={25.8} />
                  K+
                </h2>
                <p class="leading-relaxed">Instagram Followers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
