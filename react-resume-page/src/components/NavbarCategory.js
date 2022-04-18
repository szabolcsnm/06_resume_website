import { NavLink } from 'react-router-dom';

function NavbarCategory() {
    return (
        <div className="main-content-nav">
            <ul>
                <li><NavLink to="/home/workexperience">{`<Work Experience/>`}</NavLink></li>
                <li><NavLink to="/home/professionalskills">{`<Professional Skills/>`}</NavLink></li>
                <li><NavLink to="/home/personalskills">{`<Personal Skills/>`}</NavLink></li>
                <li><NavLink to="/home/education">{`<Education/>`}</NavLink></li>
            </ul>
        </div>
    )
}

export default NavbarCategory;