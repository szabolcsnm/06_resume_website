import '../style/toggleButton.css';

import { useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


function ToggleButton() {
    const themeContextValue = useContext(ThemeContext);
    
    
    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        themeContextValue.setTheme(localTheme);
    }, []);

    const changeThemeHandler = (event) => {
        console.log(event.target.checked);
        if(event.target.checked === true) {
            themeContextValue.setTheme("dark-theme");
            localStorage.setItem('theme', "dark-theme");
            // console.log(themeContextValue.theme);
        } else {
            themeContextValue.setTheme("light-theme");
            localStorage.setItem('theme', "light-theme");
            // console.log(themeContextValue.theme);
        }
    };

    return (
        <input className="toggle-button" type="checkbox" onChange={ changeThemeHandler } checked={ themeContextValue.theme === "dark-theme" ? true : false }/>
    );
}

export default ToggleButton;
