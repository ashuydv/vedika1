import React, { useEffect } from "react";
import displayRazorpay from "../utils/PaymentGateway";

export const Twitter = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-col flex-wrap lg:py-6 lg:w-1/2  lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              {/* <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div> */}
              <div class="flex-grow">
                <h2 class="text-white text-3xl title-font font-medium mb-3">
                  Twitter Consultation
                </h2>
                <div class="h-1 w-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded mb-2"></div>
                <p class="leading-relaxed text-base">
                  As a result of Twitter's emphasis on the short form of
                  content, I approached content creation on Twitter as a
                  challenge. Over the course of a little more than a year, I was
                  able to grow my Twitter following from 0 to over 49k+ people.
                </p>
                <p className="leading-relaxed text-base">
                  You will learn the following if you take this consultation:
                </p>
                <div class="flex flex-wrap sm:my-2 -mx-2">
                  <div class="p-2 w-full">
                    <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-white">
                        Profile optimization
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-white">
                        How to create content on Twitter
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-white">
                        What to not do on Twitter
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-white">
                        Best times to post on Twitter
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-white">
                        Engagement Strategy for Twitter
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-white">
                        Twitter DM Strategy
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-white">
                        Twitter Strategy from 0-5000 followers
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-white">
                        How to write threads on Twitter
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={displayRazorpay}
              class="flex mx-auto text-white bg-gradient-to-br from-blue-500 to-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Ready, Set, Go!!
            </button>
          </div>
          <div class="lg:w-1/2 w-full lg:mb-0 rounded-lg lg:pl-12 sm:my-4 overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src="https://dummyimage.com/460x500"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
