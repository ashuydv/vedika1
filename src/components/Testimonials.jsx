import React from "react";
import ClientF10 from "../assets/videos/ClientF10.mp4";
import ClientF2 from "../assets/videos/ClientF2.MOV";
import ClientF4 from "../assets/videos/ClientF4.mp4";
import ClientF6 from "../assets/videos/ClientF6.mp4";
import ClientF7 from "../assets/videos/ClientF7.mp4";
import ClientF9 from "../assets/videos/ClientF9.mp4";
import ClientF1_2 from "../assets/videos/ClientF1_2.MOV";



export const Testimonials = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-3xl font-medium title-font text-white mb-12 text-center">
            Testimonials
          </h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-2 md:w-1/3">
              <div class=" bg-gray-800 bg-opacity-40 p-4 rounded">
                <video class="w-screen rounded" controls>
                  <source
                    class="w-12"
                    src={ClientF10}
                    type="video/mp4"
                    controls 
                  />
                </video>
                <a class="inline-flex items-center mt-8">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-white">
                      Holden Caulfield
                    </span>
                    <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-2 md:w-1/3">
              <div class=" bg-gray-800 bg-opacity-40 p-4 rounded">
                <video class="w-screen rounded" controls>
                  <source
                    class="w-12"
                    src={ClientF1_2}
                    type="video/mp4"
                    controls 
                  />
                </video>
                <a class="inline-flex items-center mt-8">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-white">
                      Holden Caulfield
                    </span>
                    <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-2 md:w-1/3">
              <div class=" bg-gray-800 bg-opacity-40 p-4 rounded">
                <video class="w-screen rounded" controls>
                  <source
                    class="w-12"
                    src={ClientF2}
                    type="video/mp4"
                    controls 
                  />
                </video>
                <a class="inline-flex items-center mt-8">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-white">
                      Holden Caulfield
                    </span>
                    <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-2 md:w-1/3">
              <div class=" bg-gray-800 bg-opacity-40 p-4 rounded">
                <video class="w-screen rounded" controls>
                  <source
                    class="w-12"
                    src={ClientF4}
                    type="video/mp4"
                    controls 
                  />
                </video>
                <a class="inline-flex items-center mt-8">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-white">
                      Holden Caulfield
                    </span>
                    <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-2 md:w-1/3">
              <div class=" bg-gray-800 bg-opacity-40 p-4 rounded">
                <video class="w-screen rounded" controls>
                  <source
                    class="w-12"
                    src={ClientF6}
                    type="video/mp4"
                    controls 
                  />
                </video>
                <a class="inline-flex items-center mt-8">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-white">
                      Holden Caulfield
                    </span>
                    <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-2 md:w-1/3">
              <div class=" bg-gray-800 bg-opacity-40 p-4 rounded">
                <video class="w-screen rounded" controls>
                  <source
                    class="w-12"
                    src={ClientF7}
                    type="video/mp4"
                    controls 
                  />
                </video>
                <a class="inline-flex items-center mt-8">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-white">
                      Holden Caulfield
                    </span>
                    <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};
