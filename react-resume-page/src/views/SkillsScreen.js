import { useState, useEffect } from "react";

/* React Components */
import TitleComponent from "../components/TitleComponent";
import Avatar from "../components/Avatar";

/* Firebase */
import { database } from "../services/firebase";
import { ref, onValue } from "firebase/database";

function ProfessionalSkillsScreen() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const refListItem = ref(database, "resume/skills");
        const removeValueEvent = onValue(refListItem, (snapshot) => {
            const item = Object.entries(snapshot.val()) || [];
            setSkills(item);
        });

        return () => {
            removeValueEvent();
        };
    }, []);


    return (
        <div className="grid-main">
            <div className="grid-main-content">
                <TitleComponent enableButton={true}/>
                <div className="main-content-list-skills">
                    <ul className="font-serif">
                    {skills && skills.map((array) => {
                        const [key, data] = array;
                        return (<li key={`profskills_${key}`}>{data}</li>)
                    })}
                    </ul>
                </div>
                <div className="blank-space"></div>
            </div>
            <Avatar />
        </div>
    )
}

export default ProfessionalSkillsScreen;