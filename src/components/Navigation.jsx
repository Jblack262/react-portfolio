import React, { useState } from 'react';
import {FiMenu} from 'react-icons/fi';

function Navigation() {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <button tabIndex="0" className={'menuButton ' + (open ? 'open' : '')} onClick={() => setOpen(!open)}><FiMenu /></button>
            <div className={"outer" + (!open ? " closed" : "")}>
                <div className="inner">
                    <ul>
                        <li><a href="#home" className="link" onClick={() => {setOpen(!open)}}>Home</a></li>
                        <li><a href="#about" className="link" onClick={() => {setOpen(!open)}}>About</a></li>
                        <li><a href="#projects" className="link" onClick={() => {setOpen(!open)}}>Projects</a></li>
                        <li><a href="#resume" className="link" onClick={() => {setOpen(!open)}}>Resume</a></li>
                        <li><a href="#contact" className="link" onClick={() => {setOpen(!open)}}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
