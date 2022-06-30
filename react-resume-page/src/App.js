import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

/* Style */
import "./App.css";

/* Screens */
import HomeScreen from "./views/HomeScreen";
import WorkExperienceScreen from "./views/WorkExperienceScreen";
import SkillsScreen from "./views/SkillsScreen";
import EducationScreen from "./views/EducationScreen";
import ContactScreen from "./views/ContactScreen";
import LoginScreen from "./views/LoginScreen";

/* Layouts */
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";

/* Context */
import { ThemeContext } from "./context/ThemeContext";

function App() {
    const [theme, setTheme] = useState("");

    const contextValue = {
        theme: theme,
        setTheme: setTheme,
    }

    return (
        <div className={`App ${theme}`}>
            <ThemeContext.Provider value={ contextValue }>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/home" element={<HomeScreen />} />
                        <Route path="/home/workexperience" element={<WorkExperienceScreen />} />
                        <Route path="/home/skills" element={<SkillsScreen />} />
                        <Route path="/home/education" element={<EducationScreen />} />
                        <Route path="/contactme" element={<ContactScreen />} />
                        {/* <Route path="/login" element={<LoginScreen />} /> */}
                    </Route>

                    {/* <Route element={<AdminLayout />}>
                        <Route path="/admin" element={ <div>Admin Page</div> } />
                    </Route> */}
                </Routes>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
