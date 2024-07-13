import React from 'react';

import image1 from '../img/to do proj.png';
import image2 from '../img/books.png';
import image3 from '../img/profile.png';
import image4 from '../img/timer.png';
import image5 from '../img/coofeeweb.png'
import image6 from '../img/cyfpro.png'
import image7 from '../img/osol proj.png'
import image8 from '../img/langug proj.png'
import image9 from '../img/todos proj.png'
import image10 from '../img/potogr proj.png'
import image11 from '../img/مهامي.png'
import image12 from '../img/pass.png'
import image13 from '../img/gpt3 proj.png'
import image14 from '../img/cv proje.png'
import image15 from '../img/login proj.png'
const CssPage = () => {
  const projects = [
    {
      image: image1,
      title: 'To Do List ',
      description: 'this project enables you to write down your tasks , remind tou of them , and cross them out when completed',
    },
    {
      image: image2,
      title: 'Books ',
      description: 'it enables you to view and read books and suggests books that suit your interests',
    },
    {
      image: image3,
      title: 'My personal website',
      description: 'Awebsite that display my skills and experinces on my personal website',
    },
    {
            image: image4,
            title: 'Temporary',
            description: 'Allows you to start , stop , and resume the timer',
             },
   {
           image: image5,
         title: 'Cafe ',
          description: 'A cafe with many types of coffee and sweets',
      },
    {
    image: image6,
    title: 'web cyfonii ',
        description: 'It allows you to spread artificial intellingence and help you with business',
                      },
                      { 
                        image: image7,
                        title: 'Osoal ',
                        description: 'A website in which I cooperated with kerneltics company allows the customer to choose is suitable for him and the part shown is the part that I worked on',
                      },
                      {
                        image: image8,
                        title: 'Learning languages ',
                        description: 'it allows the learner to choose his teacher and the approprate curriculum for him , teaching and choosing the language for the learner with the approprate price',
                      },
                      {
                        image: image9,
                        title: 'Todos',
                        description: 'Adds your tasks and delete them when finished',
                      },
                      {
                        image: image10,
                        title: 'photographer',
                        description: 'in cooperation with kerneltics company , this part was designed to cover the types of photography for the desired location ',
                      }, 
                      {
                        image: image11,
                        title: 'my daily taskes',
                        description: 'allows you to activate a reminder to task and motivate you',
                      }
                      ,
                      {
                        image: image12,
                        title: 'Password generator',
                        description: 'Password generator',
                      },
                      {
                        image: image13,
                        title: 'GPT-3',
                        description: 'Artificial intelligence allows you to communicate with the company faster, provide better services, and connect you with customers and employees confidentially',
                      },
                      {
                        image: image14,
                        title: 'Introductory site',
                        description: 'An introductory website for a client, mentioning his skills and experiences and a simple introduction about him ',
                      },
                      {
                        image: image15,
                        title: ' Registration page',
                        description: 'A new login or registration page in several ways, either through Google, Apple ID, or Facebook ',
                      }
  ];

  return (
    <section className="projects-section p-16 m-16 px-5">
      <h2>My Business</h2>
      <p>
        This part includes some of my work in developing and creating website
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button>github</button>
          </div>
          
        ))}
      </div>
    
    </section>
  );
};

export default CssPage;