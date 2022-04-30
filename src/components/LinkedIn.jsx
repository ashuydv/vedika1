import React from "react";
import displayRazorpay from "../utils/PaymentGateway";

export const LinkedIn = ({ coursePrice }) => {
  coursePrice = 499;
  return (
    <div>
      <section class="textgray-90urpleg-gradient-to-br from-gray-50 to-gray-200 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src="https://dummyimage.com/460x500"
            />
          </div>
          <div class="flex flex-col flex-wrap lg:pt-0 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              {/* <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-gray-200 to-gray-300 text-purple-400 mb-5">
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
                <h2 class="text-black text-3xl title-font font-medium mb-3">
                  LinkedIn Consultation
                </h2>
                <div class="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded mb-2"></div>
                <p class="leading-relaxed text-base">
                  My first foray into content creation was on LinkedIn. I was
                  able to grow my LinkedIn account from 0 to 85k+ followers in a
                  year through a lot of trial and error and learning about the
                  platform in depth.
                </p>
                <p className="leading-relaxed text-base">
                  You will learn the following if you take this consultation:
                </p>
                <div class="flex flex-wrap sm:my-2 -mx-2">
                  <div class="p-2 w-full">
                    <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-purple-400 w-6 h-6 flex-shrink0 mr-4"urple                     viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-gray-900">
                        Profile optimization
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-purple-400 w-6 h-6 flex-shrink0 mr-4"urple                     viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-gray-900">
                        How to find your niche
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-purple-400 w-6 h-6 flex-shrink0 mr-4"urple                     viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-gray-900">
                        How to generate unlimited content ideas
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-purple-400 w-6 h-6 flex-shrink0 mr-4"urple                     viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-gray-900">
                        How to build a LinkedIn content strategy
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-purple-400 w-6 h-6 flex-shrink0 mr-4"urple                     viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-gray-900">
                        How to write content that grabs eyeballs
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-purple-400 w-6 h-6 flex-shrink0 mr-4"urple                     viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-gray-900">
                        How to engage like a pro
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-purple-400 w-6 h-6 flex-shrink0 mr-4"urple                     viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-gray-900">
                        Hashtags on LinkedIn
                      </span>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium text-gray-900">
                        A secret lead generation tool
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={displayRazorpay}
              class="flex mx-auto text-gray-50 bg-gradient-to-r from-purple-500 to-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Grow your LinkedIn at just &#8377;{coursePrice}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
