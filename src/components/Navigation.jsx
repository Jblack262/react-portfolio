import React, { useState } from 'react';
import {FiMenu} from 'react-icons/fi';
import {Link} from 'react-router-dom';

function Navigation() {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <button className="menuButton"><FiMenu onClick={() => setOpen(!open)} tabIndex="0"/></button>
            <div className={"outer" + (!open ? " closed" : "")}>
                <div className="inner">
                    <ul>
                        <li><Link to="/" className="link" onClick={() => {setOpen(!open)}}>Home</Link></li>
                        <li><Link to="/abcd" className="link" onClick={() => {setOpen(!open)}}>Experience</Link></li>
                        <li><Link to="/dcba" className="link" onClick={() => {setOpen(!open)}}>Skills</Link></li>
                        <li><Link to="/zyxw" className="link" onClick={() => {setOpen(!open)}}>About Me</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
