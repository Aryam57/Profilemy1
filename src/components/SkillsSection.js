import React from 'react';

import physicsImage from '../img/physics.png';
import uiuxImage from '../img/uiux.png';
import writing from '../img/writing.png';
import nodejs from '../img/nodejs.png';
const SkillsSection = () => {
  return (
    <div className="skills-section p-16 m-16 px-5 md:px-20 " id='skills'>
      <div className="flex flex-col md:flex-row">
        {/* القسم الأيسر */}
        <div className="flex-1 mb-10 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">What My Design Skills Included</h2>
          <p className="mt-4 text-gray-600">
            These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.
          </p>
          <div className="mt-6">
            <div className="mb-4">
              <span className="block text-gray-800">Front End </span>
              <div className="w-1/2 bg-gray-300 h-2 rounded">
                <div className="bg-yellow-500 h-full rounded" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <span className="block text-gray-800">Back End </span>
              <div className="w-1/2 bg-gray-300 h-2 rounded">
                <div className="bg-yellow-500 h-full rounded" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <span className="block text-gray-800">UX & UI </span>
              <div className="w-1/5 bg-gray-300 h-2 rounded">
                <div className="bg-yellow-500 h-full rounded" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
        {/* القسم الأيمن */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center bg-white p-5 rounded shadow">
            <img src={uiuxImage}  className="w-12 h-12 mb-2" alt="UI/UX Design" />
            <span className="text-gray-800 font-bold">UI/UX Design</span>
          </div>
          <div className="flex flex-col items-center bg-white p-5 rounded shadow">
            <img src={writing}  className="w-12 h-12 mb-2" alt="UI/UX Design"/>
            <span className="text-gray-800 font-bold">Excel </span>
          </div>
          <div className="flex flex-col items-center bg-white p-5 rounded shadow">
            <img src={physicsImage}  className="w-12 h-12 mb-2" alt="UI/UX Design"/>
            <span className="text-gray-800 font-bold">React js </span>
          </div>
          <div className="flex flex-col items-center bg-white p-5 rounded shadow">
            <img src={nodejs}  className="w-12 h-12 mb-2"alt="UI/UX Design" />
            <span className="text-gray-800 font-bold">Node js</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;

