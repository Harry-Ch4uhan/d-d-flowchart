import React from "react";

import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div onClick={props.addBlock} className={classes.Sidebar}>
      <p style={{ color: "white" }}>Add Element</p>
    </div>
  );
};

export default Sidebar;
