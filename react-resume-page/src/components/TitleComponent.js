import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

/* FontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function TitleComponent({enableButton}) {
    const locationArray = useLocation().pathname.split('/');
    const locationArrayLastItem = locationArray[locationArray.length-1];

    const [backButton, setBackButton] = useState(true);


    let title = '';
    switch(locationArrayLastItem) {
        case 'workexperience': title = 'Work Experience';
        break;
        case 'skills': title = 'Professional & Other Skills';
        break;
        case 'education': title = 'Education';
        break;
        case 'contactme': title = 'Contact Me';
        break;
        default: title = '';
    }

    return (
        <div className="title-component">
            <div className="title-component-parent">
                <span className="title-component-child">{ title }</span>
                {enableButton && <NavLink className="title-component-button" to="/home"><FontAwesomeIcon icon={faArrowLeft} /></NavLink>}
            </div>
        </div>
    )
}

export default TitleComponent;