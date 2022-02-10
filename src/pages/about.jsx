import React from 'react';
import {IoIosSpeedometer} from 'react-icons/io';
import {IoBulb, IoRocketSharp} from 'react-icons/io5';
import {MdDevices} from 'react-icons/md';

import profileImg from '../assets/me.png';


const about = () => {
  return <div className='about' id='about'>
      <div className="title">
          <h1>About</h1>
      </div>

    <div className="about-icons-container">
        <div className="row">
            <div className="icon-container">
                <IoIosSpeedometer className='icon'/>
                <h2 className="icon-title">Speed</h2>
                <p className="desc">I work fast and efficiently.</p>
            </div>

            <div className="icon-container">
                <MdDevices className='icon'/>
                <h2 className="icon-title">Responsive</h2>
                <p className="desc">Responsive layouts for all devices.</p>
            </div>
        </div>

        <div className="row">
            <div className="icon-container">
                <IoBulb className='icon'/>
                <h2 className="icon-title">Intuitive</h2>
                <p className="desc">Easy to use, simple UI and UX</p>
            </div>

            <div className="icon-container">
                <IoRocketSharp className='icon'/>
                <h2 className="icon-title">Dynamic</h2>
                <p className="desc">Experienced full-stack web developer</p>
            </div>
        </div>
    </div>
  
    <div className="about-content-container">
        <div className="profile-container">
            <div className="image-container">
                <img src={profileImg} alt="JD Blackman" />
            </div>
            <h2 className="profile-title">Who is this guy?</h2>
            <p className="profile-desc">I am a student at west-MEC. I do full-stack web development and I love to make UI effects, animations and create intuitive, dynamic user experiences.</p>
        </div>

        <ul className="skills-chart">
            <li className="skillBox">
                <div className="labels">
                    <p>CSS</p>
                    <p>90%</p>
                </div>
                <div className="skill">
                    <div className="skill-level" style={{width: '90%'}}></div>
                </div>
            </li>
            <li className="skillBox">
                <div className="labels">
                    <p>HTML</p>
                    <p>90%</p>
                </div>
                <div className="skill">
                    <div className="skill-level" style={{width: '90%'}}></div>
                </div>
            </li>
            <li className="skillBox">
                <div className="labels">
                    <p>React</p>
                    <p>80%</p>
                </div>
                <div className="skill">
                    <div className="skill-level" style={{width: '80%'}}></div>
                </div>
            </li>
            <li className="skillBox">
                <div className="labels">
                    <p>JavaScript</p>
                    <p>80%</p>
                </div>
                <div className="skill">
                    <div className="skill-level" style={{width: '80%'}}></div>
                </div>
            </li>
            <li className="skillBox">
                <div className="labels">
                    <p>NodeJS</p>
                    <p>75%</p>
                </div>
                <div className="skill">
                    <div className="skill-level" style={{width: '75%'}}></div>
                </div>
            </li>
            <li className="skillBox">
                <div className="labels">
                    <p>Vue</p>
                    <p>70%</p>
                </div>
                <div className="skill">
                    <div className="skill-level" style={{width: '70%'}}></div>
                </div>
            </li>
            <li className="skillBox">
                <div className="labels">
                    <p>UI Design</p>
                    <p>60%</p>
                </div>
                <div className="skill">
                    <div className="skill-level" style={{width: '60%'}}></div>
                </div>
            </li>
        </ul>
    </div>

  </div>;
};

export default about;
