import React from "react";

const AboutMe = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            {/* Big Image */}
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="https://d1ivubrj2a21dq.cloudfront.net/wp-content/uploads/2022/12/15132808/Web-Developer-skill.jpg"
              // src="./images/background.jpg" //
            />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex overflow-hidden items-center justify-center bg-gray-200 text-gray-400">
                <img src="./images/profile.jpg" />
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                {/* your Name goes here */}
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  Adem_Sahil
                </h2>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                {/* something about you  */}
                <p class="text-base">
                  Industrial Engineering from University of Miami "2019" / Full Stack Software Developer Bootcamp UNC "2023"
                </p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              {/* Something About you in detail */}
              <p class="leading-relaxed text-lg mb-4">
              As a software developer, I am a highly analytical and creative problem solver with a passion for writing clean, efficient code. 
              I am skilled in a variety of programming languages and frameworks, 
              and have a deep understanding of software development methodologies and best practices. 
              I thrive in fast-paced, collaborative environments and am dedicated to producing high-quality, 
              user-focused software solutions that meet business objectives. 
              Whether working on a team or independently, I am committed to continuous learning and growth, 
              and take pride in delivering software that is both innovative and reliable.
              </p>
              <p class="text-indigo-500 inline-flex items-center">thank you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
