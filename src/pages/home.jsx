import React from 'react';
// import {AiOutlineArrowDown} from 'react-icons/ai';


function home() {
    const name = "JD BLACKMAN".split('');
    return (
        <div className="home" tabIndex="-1" id='home'>
            <div className="nameCard">
                <div className="name">
                    {name.map((letter, index) => { //loops through an array with my name in it so i can style each letter
                        return (
                            <span key={index}>{letter}</span>
                        )
                    })}
                </div>
                <h3>Full-Stack Web Developer</h3>
            </div>
        </div>
    )
}

export default home
