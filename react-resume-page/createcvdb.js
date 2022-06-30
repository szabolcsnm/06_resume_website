const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set, push } = require("firebase/database");

const firebaseConfig = {
    apiKey: "AIzaSyD-6TPvRQpDMNugByWoL9o9jBmhPrO6vgM",
    authDomain: "pma-react-resume.firebaseapp.com",
    databaseURL: "https://pma-react-resume-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pma-react-resume",
    storageBucket: "pma-react-resume.appspot.com",
    messagingSenderId: "248814540663",
    appId: "1:248814540663:web:ddeadf50e06df95e45f372"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const mainEndpoint = "resume";
const workExperienceEndpoint = "workexperience";
const skillsEndpoint = "skills";
const educationEndpoint = "education";

function createData(endpoint, data) {
    const refEndpoint = ref(database, `${mainEndpoint}/${endpoint}`);
    const newRefEndpoint = push(refEndpoint);
    return set(newRefEndpoint, data);
}

function createDataList(endpoint, data) {
    const refEndpoint = ref(database, `${mainEndpoint}/${endpoint}`);
    return set(refEndpoint, data);
}

// createData(workExperienceEndpoint, {
//     position: "Meetup Platform Developer",
//     company: "Progmatic Academy | May 2022 - June 2022",
//     description: [
//         "During the project phase my team implemented a single page application from concept to deployment using SCRUM methodology",
//         "Along with the core technologies and Git as VCS, the meetup platform was built on React while the backend was provided by Google Firebase",
//         "The project helped me putting theory into practice, deepen my knowledge that was aquired during the course and also taught me how to work in a team in this profession",
//     ],
// }).then(() => console.log("workExperienceEndpoint created"));

// createData(workExperienceEndpoint, {
//     position: "Statutory Controllership Analyst",
//     company: "GE Hungary Kft. | January 2019 - present",
//     description: [
//         "Responsible to ensure all statutory regulatory filings are completed timely, efficiently and in compliance with the country regulatory requirements",
//         "Support the preparation of the G2S adjustments, subledgers, statutory trial balances and financial statements",
//         "Prepare, update and archive the technical documentation of business processes (SOP), coordinate with various stakeholders",
//         "Prepare statistical reports while maintaining relations with local authorities in order to ensure that regulatory deadlines are met",
//         "Support year-end audits by providing all PBC items requested by auditors, communicate significant transactions and issues" 
//     ],
// }).then(() => console.log("workExperienceEndpoint created"));

// createData(workExperienceEndpoint, {
//     position: "Audit Assistant",
//     company: "Ernst & Young Könyvvizsgáló Kft. | August 2018 - November 2018",
//     description: [
//         "Support the planning, execution and delivery of assurance engagements",
//         "Document the execution of specific audit procedures as defined by the engagement objectives", "Recognize potential audit issues from basic analysis of the financial statements" 
//     ],
// }).then(() => console.log("workExperienceEndpoint created"));


createDataList(skillsEndpoint, [
  "HTML5, CSS3, SASS ",
  "JavaScript ES6+",
  "React",
  "Algorithms, Data Structures",
  "OOP & Functional Programming",
  "Ajax, REST API",
  "Version Control (GIT & GitHub)",
  "Agile Software Development (SCRUM)",
  "Responsive Design",
  "English level B2 (upper-intermediate)",
  "Chartered certified accountant for businesses (HAS)",
  "Precise, analytical approach to work tasks",
  "Being attentive and dependable with detailed work activities",
  "Gathering data in a logical, systematic way"
]).then(() => console.log("professionalSkillsEndpoint created"));


// createData(educationEndpoint, {
//     university: "Progmatic Academy | Oct. 2021 - Jun. 2022",
//     degree: "Junior Frontend Developer Certificate",
//     specialization: ""
// }).then(() => console.log("educationEndpoint created"));

// createData(educationEndpoint, {
//     university: "University of Pécs | 2018",
//     degree: "Bachelor of Science in Finance and Accounting",
//     specialization: "qualified as an Economist in Finance and Accounting"
// }).then(() => console.log("educationEndpoint created"));

// createData(educationEndpoint, {
//     university: "University of Pécs | 2014",
//     degree: "Bachelor of Science in Physics",
//     specialization: "qualified as a Physicist (IT - Physics specialization)"
// }).then(() => console.log("educationEndpoint created"));
