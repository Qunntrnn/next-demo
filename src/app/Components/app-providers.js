"use client"

import { useState } from "react";
import { ThemeContext } from "../contexts/theme.context";
import {Provider,connect} from "react-redux"
import { AppButton } from "./app-button";
import { store } from "../store/store";


export const AppProviders = ({children}) => {
    const [theme,setTheme] = useState("light")
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            return;  
        }
        setTheme("light")
    }
    return (<Provider store={store}>
         <ThemeContext.Provider value={theme} >
            <AppButton color="blue" onClick={toggleTheme}>Toggle Theme</AppButton>{children}
            
        </ThemeContext.Provider>
        </Provider>


)        }
