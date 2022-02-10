import React from 'react';
import {FaUser, FaPhoneAlt, GrMail, FaMapMarkerAlt} from 'react-icons/all';


const resume = () => {
  return <div className='resume' id='resume'>
      <div className="title">
          <h1>Resume</h1>
      </div>

      <div className="personal-info-container">

        <div className="row">
          <div className="info-container">
            <FaUser className='icon' />
            <p>James Blackman</p>
          </div>
          <div className="info-container">
            <FaPhoneAlt className='icon' />
            {/* <p>(530) - 551 - 8112</p> */}
            <p>(123) - 456 - 7890</p>
          </div>
        </div>
        <div className="row">
          <div className="info-container">
            <GrMail className='icon' />
            <p>JDBlackman10@gmail.com</p>
          </div>
          <div className="info-container">
            <FaMapMarkerAlt className='icon' />
            <p>Phoenix, AZ</p>
          </div>
        </div>
      </div>

      <div className="info-card-container">
        <div className="row">
          <div className="info-card">
            <h2 className="info-title">Professional Profile</h2>
            <p>Dedicated, logical, second year coding student at West-MEC Northeast Campus, who is able to work quickly and think critically; pursuing the position of full stack web developer. I have been programming in JavaScript since I was ten years old and have always loved it.</p>
          </div>
          <div className="info-card">
            <h2 className="info-title">Education</h2>
            <ul className='list'>
              <li className='date'>May 2022</li>
              <li className='highlighted'>Full-Stack Web Development</li>
              <li className='location'>West-MEC (Northeast Campus)</li>

              <li className='highlighted'>High School</li>
              <li className='location'>Ironwood High School (Glendale, AZ)</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="info-card">
            <h2 className="info-title">Work History</h2>
            <ul className='list'>
              <li className='job-name'>Tech Intern</li>
              <li className='job-dates'>May 2021 - Present</li>
              <li className='location'>New Life Community Church, Peoria, AZ</li>
              
              <li className='job-name'>Assistant to the Facilities Manager </li>
              <li className="job-dates">May 2019 - Present</li>
              <li className='location'>New Life Community Church, Peoria, AZ</li>
            </ul>
          </div>
          <div className="info-card">
            <h2 className="info-title">Additional Skills</h2>
              <ul className='skills'>
                <li>MTA: HTML 5 + CSS3 certification</li>
                <li>Working with a team with effective communication and organization skills.</li>
                <li>Proficiency with VSCode and Github workflow.</li>
                <li>CAD modeling and 3D printing</li>
              </ul>
          </div>
        </div>
      </div>

      <a href='https://docs.google.com/document/d/1JcXqyuzjThSZzUPto2EidTDyJS8gVRW0/edit?usp=sharing&ouid=112949303144839493703&rtpof=true&sd=true' className="resume-button">More Info</a>
  </div>;
};

export default resume;
