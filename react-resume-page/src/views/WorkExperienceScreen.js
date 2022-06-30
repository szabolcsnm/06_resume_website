import { useState, useEffect } from "react";

/* React Components */
import TitleComponent from "../components/TitleComponent";
import Avatar from "../components/Avatar";

/* Firebase */
import { database } from "../services/firebase";
import { ref, onValue } from "firebase/database";

function WorkExperienceScreen() {
    const [workExperience, setWorkExperience] = useState([]);

    useEffect(() => {
        const refListItem = ref(database, "resume/workexperience");
        const removeValueEvent = onValue(refListItem, (snapshot) => {
            const item = Object.entries(snapshot.val()) || [];
            setWorkExperience(item);
        });

        return () => {
            removeValueEvent();
        };
    }, []);

    return (
        <div className="grid-main">
            <div className="grid-main-content">
                <TitleComponent enableButton={true}/>
                <div className="main-content-list">
                    {workExperience && workExperience.map((item => {
                        const [key, data] = item;
                        const [company, description, position] = Object.entries(data);

                        return (
                            <article key={`item_${key}`}>
                                <h3>{position[1]}</h3>
                                <h4>{company[1]}</h4>
                                <ul className="font-serif">
                                    {description[1].map((item, index) => {
                                        return (<li key={`list_${index}`}>{item}</li>)
                                    })}
                                </ul>
                            </article>
                        );
                    }))}
                </div>
                <div className="blank-space"></div>
            </div>
            <Avatar />
        </div>
    )
}

export default WorkExperienceScreen;
