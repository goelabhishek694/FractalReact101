import React, { useContext } from "react";
import { ThemeWrapper } from "./ThemeManager";
function Header() {
    
  return (
    <>
      <div>Header</div>
      <div>⬇️</div>
      <Options></Options>
      <Options></Options>
      <Options></Options>
    </>
  );
}

function Options(){
    const {currTheme} = useContext(ThemeWrapper);
    return <div className={currTheme}>XOXO</div>
}
export default Header;
