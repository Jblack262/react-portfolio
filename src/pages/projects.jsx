import React from 'react';

import project1 from '../assets/websiteThumbnails/website1.png'
import project2 from '../assets/websiteThumbnails/website2.png'
import project3 from '../assets/websiteThumbnails/website3.png'
import project4 from '../assets/websiteThumbnails/website4.png'
// import project5 from '../assets/websiteThumbnails/website5.png'
// import project6 from '../assets/websiteThumbnails/website6.png'
import project7 from '../assets/websiteThumbnails/website7.png'

function projects() {
  return (
  <div className='projects' id='projects'>
    <div className="title">
        <h1>Projects</h1>
    </div>


    <div className="projects-container">
        <div className="project">
            <img src={project4} alt="" />
            <div className="overlay">
                <h1>Project Name</h1>
                <a href="http://google.com">Visit Site</a>
            </div>
        </div>
        <div className="project">
            <img src={project2} alt="" />
            <div className="overlay">
                <h1>Project Name</h1>
                <a href="http://google.com">Visit Site</a>
            </div>
        </div>
        <div className="project">
            <img src={project3} alt="" />
            <div className="overlay">
                <h1>Project Name</h1>
                <a href="http://google.com">Visit Site</a>
            </div>
        </div>
        <div className="project">
            <img src={project7} alt="" />
            <div className="overlay">
                <h1>Project Name</h1>
                <a href="http://google.com">Visit Site</a>
            </div>
        </div>
        <div className="project">
            <img src={project1} alt="" />
            <div className="overlay">
                <h1>Project Name</h1>
                <a href="http://google.com">Visit Site</a>
            </div>
        </div>
    </div>
  </div>);
}

export default projects;
