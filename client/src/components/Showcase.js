import React from "react";

import showcaseStyle from "./css/Showcase.module.css";

const Showcase = ({ children }) => {
  return (
    <div className={showcaseStyle.showcase}>

      {children}
    </div>
  );
};

export default Showcase;
