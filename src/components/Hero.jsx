import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { vedika } from "../assets/images/vedika.jpg";

export const Hero = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-50">
              <span className=" text-xl">Hello, I'm</span>
              <br className="inline-block" />
              <ReactTypingEffect
                speed="150"
                eraseSpeed="150"
                eraseDelay="150"
                typingDelay="150"
                smooth
                text={[
                  "an Entrepreneur",
                  "a Digital Marketeer",
                  "a Content Creator",
                ]}
              />
            </h1>

            <p class="mb-8 leading-relaxed">Quick intro like in twitter</p>
            <div class="flex justify-center">
              {/* <button class="inline-flex text-white bg-gradient-to-br from-yellow-500 to-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                Read More
              </button> */}
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
        <a href="#feature">
          <i class="fa-solid fa-chevron-down absolute left-1/2 animate-bounce "></i>{" "}
        </a>
      </section>
    </div>
  );
};
