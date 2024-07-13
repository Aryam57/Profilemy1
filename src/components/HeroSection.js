import React from 'react';
import profilePic from '../img/Coding workshop-amico.png';
import cv from '../pdf/Cv aryamsultan.pdf'


const HeroSection = () => {
  return (
    <section className=" p-16 m-16" id='Home'>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900">
            Hi! I'm Aryam Alharbi -<br />
            <span className="text-blue-900">Full Stack Developer</span>
          </h1>
          <p className="text-black-600 mt-4 text-12">
           Website designer and developer. I seek to provide innovative solutions with high-quality technologies. More than 3 years of experience and content writer.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <a href={cv} className="bg-blue-900 text-white px-4 py-2 rounded mr-4">Download CV</a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img src={profilePic} alt="Profile" className="w-1/2 h-64 md:w-80 md:h-80 " />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-16 space-x-4 ">
          <div className="bg-white shadow-lg rounded-lg p-6 m-6">
            <h2 className="text-xl font-bold ">UI/UX Designer</h2>
            <p>Creative interfaces</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 m-6">
            <h2 className="text-xl font-bold">Website developer</h2>
            <p>Full stack developer</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 m-6">
            <h2 className="text-xl font-bold"> Freelancer</h2>
            <p>Available for work</p>
          </div>
        </div>
    </section>
  );
}

export default HeroSection;
