/* Style */
import "./App.css";
import "./style/title-component.css";

/* React Router */
import { Routes, Route } from "react-router-dom";

/* Screens */
import HomeScreen from "./views/HomeScreen";
import ContactScreen from "./views/ContactScreen";
import LoginScreen from "./views/LoginScreen";

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
