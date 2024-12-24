import React, { useContext } from "react";
import { ThemeWrapper } from "./ThemeManager";
function Articles() {
    const {currTheme} = useContext(ThemeWrapper);
  return (
    <div style={{ border: "1px solid ", padding: "1rem", margin: "1rem" }}>
      <div>Article</div>
      <div>⬇</div>
      <p className={currTheme}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, id.
      </p>
    </div>
  );
}

export default Articles;
