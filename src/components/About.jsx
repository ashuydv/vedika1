import React from "react";

export const About = () => {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded"
              src="https://dummyimage.com/200x200"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                More About Me ...
              </h1>

              <p class="leading-relaxed">
                Hi! My name is Vedika, and I work as a personal branding
                strategist. I've been assisting industry experts and
                entrepreneurs in developing a strong personal brand on LinkedIn
                and Twitter which in turn establishes thought leadership and
                gets them leads.
              </p>
              <p>
                I began my personal branding journey 2.5 years ago and have
                never looked back since. Through my personal brand, I was able
                to establish my six-figure agency called{" "}
                <b>"The Fourth Square" </b>
              </p>
              <p>
                Working with various clients has shown me how many people miss
                out on the opportunity to build a personal brand. As a result,
                I've created a consultation with the goal of helping everyone
                from a college student to a company's CEO in developing a strong
                personal brand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
