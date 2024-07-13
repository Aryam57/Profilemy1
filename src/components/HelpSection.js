import React from 'react';
import profilePic from '../img/Hand coding-rafiki.png';

const HelpSection = () => {
  return (
    <div id='About' className="hero-section flex flex-col md:flex-row items-center p-16 m-16 px-5 md:px-20">
      {/* الجزء الأيسر */}
      <div className="flex-1 flex justify-center">
        <div className="relative">
          <img src={profilePic} alt="Profile" className="w-64 h-64 md:w-80 md:h-80 rounded-full" />
          
        </div>
      </div>
      
      {/* الجزء الأيمن */}
      <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 ">About me</h2>
        <p className="mt-4 text-gray-600 font-bold">
        I can help you build a good quality website. I have more than 3 years of experience in website programming and development, in addition to designing the user experience and user interface used for the website.
        </p>
        <p className="mt-4 text-gray-600 font-bold">
        There is no perfection without effort, and no effort is achieved without effort. These words will remain immortal until the end of the journey.
        </p>
        <div className=" mt-6 flex justify-center md:justify-start space-x-4">
          <a href="https://www.behance.net/aryam12_" className="text-blue-900 font-bold text-sm"><i className="fab fa-behance "></i>Behance </a>
          <a href="https://github.com/Aryam57" className="text-blue-900 font-bold text-sm"><i className="fab fa-dribbble"></i> github</a>
          <a href="https://www.linkedin.com/in/aryam-alharbi-7ba768228" className="text-blue-900 font-bold text-sm"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default HelpSection;

