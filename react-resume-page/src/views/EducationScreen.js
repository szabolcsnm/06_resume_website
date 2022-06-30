import { useState, useEffect } from "react";

/* React Components */
import TitleComponent from "../components/TitleComponent";
import Avatar from "../components/Avatar";

/* Firebase */
import { database } from "../services/firebase";
import { ref, onValue } from "firebase/database";

function EducationScreen() {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const refListItem = ref(database, "resume/education");
        const removeValueEvent = onValue(refListItem, (snapshot) => {
            const item = Object.entries(snapshot.val()) || [];
            setEducation(item);
        });

        return () => {
            removeValueEvent();
        };
    }, []);


    return (
        <div className="grid-main">
            <div className="grid-main-content">
                <TitleComponent enableButton={true}/>
                <div className="main-content-list-education">
                    {education && education.map((item => {
                        const [key, data] = item;
                        const [degree, specialization, university] = Object.entries(data);

                        return (
                            <div key={`item_${key}`}>
                                <h3>{university[1]}</h3>
                                <h4>{degree[1]}</h4>
                                <p className="font-serif">{specialization[1]}</p>
                            </div>
                        );
                    }))}
                </div>
                <div className="blank-space"></div>
            </div>
            <Avatar />
        </div>
    )
}

export default EducationScreen;