/* Style */
import "./App.css";
import "./style/title-component.css";

/* React Router */
import { Routes, Route } from "react-router-dom";

/* Screens */
import HomeScreen from "./views/HomeScreen";
import ContactScreen from "./views/ContactScreen";
import LoginScreen from "./views/LoginScreen";
import WorkExperienceScreen from "./views/WorkExperienceScreen";
import ProfessionalSkillsScreen from "./views/ProfessionalSkillsScreen";
import PersonalSkillsScreen from "./views/PersonalSkillsScreen";
import EducationScreen from "./views/EducationScreen";


/* Layouts */
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/home" element={<HomeScreen />} />
                    <Route path="/home/workexperience" element={<WorkExperienceScreen />} />
                    <Route path="/home/professionalskills" element={<ProfessionalSkillsScreen />} />
                    <Route path="/home/personalskills" element={<PersonalSkillsScreen />} />
                    <Route path="/home/education" element={<EducationScreen />} />
                    <Route path="/contactme" element={<ContactScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                </Route>

                <Route element={<AdminLayout />}>
                    <Route path="/admin" element={ <div>Admin Page</div> } />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
