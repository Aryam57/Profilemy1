import React from 'react';
import logo from '../img/logo (1).png'
const Header = () => {
  return (
                        <header className="bg-gray-100 text-white py-4 shadow">
  <div className="container mx-auto flex justify-between items-center">
   
    <div>
      <img src={logo} alt="Aryam Alharbi Logo" className=" w-20" />
    </div>
    
    
    <nav>
      <ul className="flex space-x-4 font-bold text-lg text-gray-800">
        <li><a href="#Home" className="text-gray-900 hover:text-gray-500">Home</a></li>
        <li><a href="#About" className="text-gray-900 hover:text-gray-500">About</a></li>
        <li><a href="#skills" className="text-gray-900 hover:text-gray-500">Skills</a></li>
        <li><a href="#programs" className="text-gray-900 hover:text-gray-500">My Business</a></li>
       
      </ul>
    </nav>
    {/* زر التواصل */}
    <button className="bg-blue-900 text-white px-4 py-2 rounded " id='Contact'>Contact Me</button>
  </div>
</header>

  );
}

export default Header;
