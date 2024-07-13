import React from 'react';
import github from '../img/github (1).png'
import twitter from '../img/twitter (1).png'
import behance from '../img/behance.png'


const Footer = () => {
  return (
    <footer className="footer-section py-10 bg-gray-100 pt-8 py-4 shadow">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold ">About Me</h2>
            <p className="mt-4 text-gray-400">
         
  Website designer & developer with over 3 years of experience,<br/> focused on innovative solutions and high-quality technologies.
</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Follow Me</h2>
            <div className="flex mt-4 space-x-4">
              <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
                <img src={behance} alt="Behance" className="w-8 h-8" />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter" className="w-8 h-8" />
              </a>
              <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
                <img src={github} alt='github' className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-4 text-gray-400">
              Email: aryamsultan45a@gmail.com
              <br />
              telegram : Aryam57A
            </p>
          </div>
        </div>
        <div className="text-center mt-10 text-gray-500">
          © 2024 Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
