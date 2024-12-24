import React,{useContext}from 'react'
import { ThemeWrapper } from "./ThemeManager";
function Footer() {
    const {handleTheme} = useContext(ThemeWrapper);
  return (
    <>
    <button onClick={handleTheme}>Toggle Theme</button>
    <div>Footer</div>
    <div>⬇️</div>
    <Options></Options>
    <Options></Options>
    <Options></Options>
    </>
  )
}

function Options(){
    const {currTheme} = useContext(ThemeWrapper);
    return(
        <div className={currTheme}>You only live once</div>
    )
}

export default Footer