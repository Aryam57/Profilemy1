import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../img/pro3.png';
import image2 from '../img/books.png';
import image3 from '../img/profile.png';

const ProjectsSection = () => {
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
  ];

  return (
    <section className="projects-section p-16 m-16 px-5" id='programs'>
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
           <a href="https://github.com/Aryam57">  <button className='bg-gray-800'>view</button></a>
        
     
         
          </div>
        ))}
      </div>
      <Link to="/css">
        <button className='bg-gray-800'>Learn More</button>
      </Link>
    </section>
  );
};

export default ProjectsSection;
