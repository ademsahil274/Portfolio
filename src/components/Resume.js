import React from "react";

const Resume = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <h1 className="text-xl font-bold">Resume</h1>
          {/* Download Resume Link */}
          <p>
            Download my
            <a
              href="./resume.pdf"
              className="text-indigo-600 cursor-pointer ml-1"
              download
            >
              Resume
            </a>
          </p>
          {/* Front End Skills */}
          <h2 className="text-xl font-bold mt-6">Font-end Skills : -</h2>
          <ul className="list-disc pl-8 uppercase ">
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
            <li>react js</li>
            <li>bootstrap</li>
            <li>tailwindcss</li>
            <li>mui</li>
          </ul>
          {/* Backend Skills */}
          <h2 className="text-xl font-bold mt-6">Back-end Skills : -</h2>
          <ul className="list-disc pl-8 uppercase ">
            <li>php</li>
            <li>node</li>
            <li>express</li>
            <li>mongodb</li>
            <li>mysql</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;