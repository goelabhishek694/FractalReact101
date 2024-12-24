import React, { createContext, useState } from "react";
import Header from "./Header";
import Articles from "./Articles";
import Footer from "./Footer";
import "./themeManager.css"

export const ThemeWrapper = createContext();

function ThemeManager() {
    const [currTheme,setCurrTheme] = useState("light");
    //used to toggle the theme from light to dark or dark to light 
    const handleTheme = () => {
        const newTheme = currTheme == "light" ? "dark" : "light";
        setCurrTheme(newTheme);
    }
  return (
    <ThemeWrapper.Provider value ={{currTheme, handleTheme}}>
      <button onClick={handleTheme}>Toggle Theme</button>
      <Header></Header>
      <Articles></Articles>
      <Footer></Footer>
    </ThemeWrapper.Provider>
  );
}

export default ThemeManager;
