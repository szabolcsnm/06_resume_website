/* FontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
// import { faGears } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    const newDate = new Date().getFullYear();

    return (
        <div className="grid-footer">
            <span>
            &copy; { newDate } by Szabolcs Derzsi
                {/* <ul>
                    <li>&copy; { newDate } by Szabolcs Derzsi, made with</li>
                    <li><FontAwesomeIcon icon={faHtml5} /></li>
                    <li><FontAwesomeIcon icon={faCss3Alt} /></li>
                    <li><FontAwesomeIcon icon={faJs} /></li>
                    <li><FontAwesomeIcon icon={faReact} /></li>
                </ul> */}
            </span>
        </div>
    )
}

export default Footer;