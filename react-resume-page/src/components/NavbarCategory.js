import { NavLink } from 'react-router-dom';

function NavbarCategory() {
    return (
        <div className="main-content-nav">
            <ul>
                <li><NavLink name="workexperience" to="/home/workexperience">{`<Work Experience />`}</NavLink></li>
                <li><NavLink name="skills" to="/home/skills">{`<Professional & Other Skills />`}</NavLink></li>
                <li><NavLink name="education" to="/home/education">{`<Education />`}</NavLink></li>
            </ul>
        </div>
    )
}

export default NavbarCategory;