// /* FontAwesome Icons */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faMobile } from '@fortawesome/free-solid-svg-icons';

import TitleComponent from '../components/TitleComponent';

function ContactScreen() {
    return (
        <div className="grid-main">
            <div className="contact-me-container">
                <div className='contact-me-title-wrapper'>
                    <TitleComponent enableButton={false}/>
                </div>
                <div className="contact-me-form-wrapper font-serif">
                    <div className='contact-me-text'>
                        <p>Call: <a href="tel: +36 70 299 3570">+36-70-299-3570</a></p>
                        <p>Write: <a href="mailto: szabolcsnm@gmail.com">szabolcsnm@gmail.com</a></p>
                        <p>Or drop me a message here:</p>
                    </div>
                    <form className="contact-me-form">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"/>
                        <label htmlFor="textarea">Message</label>
                        <textarea type="text" name="textarea" id="textarea"/>
                        <button type="submit">Submit</button>
                    </form>
                    <div className="blank-space"></div>
                </div>
            </div>
        </div>
    );
}

export default ContactScreen;
