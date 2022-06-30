import ToggleButton from './ToggleButton';

/* FontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">

            <div className="navbar-name">
                <span className="font-bold">I'm Szabolcs Derzsi</span>
                <br/>
                <span>Junior Frontend Developer</span>
            </div>

            <nav className="navbar-navigation">
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/contactme">Contact Me</NavLink></li>
                    {/* <li><NavLink to="/admin"><FontAwesomeIcon icon={faGears} />{" "}Admin</NavLink></li> */}
                    <li><a href="https://linkedin.com/in/derzsi-szabolcs"><FontAwesomeIcon icon={faLinkedinIn} className="icons"/></a></li>
                    <li><a href="https://github.com/szabolcsnm"><FontAwesomeIcon icon={faGithub} className="icons"/></a></li>
                    <li><ToggleButton /></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;