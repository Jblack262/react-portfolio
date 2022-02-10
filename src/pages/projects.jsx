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
            <img src={project4} alt="Class Newsletter" />
            <div className="overlay">
                <h1>Class Newsletter Site</h1>
                <a href="https://mystudents-nec.netlify.app">Visit Site</a>
            </div>
        </div>
        <div className="project">
            <img src={project2} alt="Sorting Algorithm Visualizer" />
            <div className="overlay">
                <h1>Sorting Algorithm Visualizer</h1>
                <a href="https://nlvya.github.io/sorting-algorithm/">Visit Site</a>
            </div>
        </div>
        <div className="project">
            <img src={project3} alt="React Example Site" />
            <div className="overlay">
                <h1>React Example Site</h1>
                <a href="https://zen-montalcini-279e5b.netlify.app">Visit Site</a>
            </div>
        </div>
        <div className="project">
            <img src={project7} alt="Vue Portfolio" />
            <div className="overlay">
                <h1>Vue Portfolio</h1>
                <a href="https://jblack262.github.io/Vue-portfolio/">Visit Site</a>
            </div>
        </div>
        <div className="project">
            <img src={project1} alt="Nintendo Console Site" />
            <div className="overlay">
                <h1>Nintendo Console Site</h1>
                <a href="https://jblack262.github.io/group-bootstrap-website/">Visit Site</a>
            </div>
        </div>
    </div>
  </div>);
}

export default projects;
