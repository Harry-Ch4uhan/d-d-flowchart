import React, { Component } from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";

import WorkSpace from "../WorkSpace/WorkSpace";

const WsManager = (props) => {
  const [workSheets, setWorksheet] = useState([
    { name: "workSheet 1", active: true },
    { name: "workSheet 2", active: false },
  ]);

  const [activeSheet, setActiveSheet] = useState(0);

  const workSpaceRef = useRef(null);

  const addSheet = () => {
    let newSheets = [...workSheets];
    newSheets.push({
      name: `workSheet ${workSheets.length + 1}`,
      active: false,
    });
    console.log(newSheets);
    setWorksheet(newSheets);
  };

  const changeSheet = (ind) => {
    let newWorksheets = [...workSheets];
    newWorksheets.forEach((el) => (el.active = false));
    newWorksheets[activeSheet].active = true;
    setWorksheet(newWorksheets);
    setActiveSheet(ind);

    console.log(
      workSpaceRef.current.childNodes[ind].childNodes[0].childNodes[0]
        .childNodes[0].childNodes[0]
    );
    setTimeout(() => {
      workSpaceRef.current.childNodes[
        ind
      ].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].scrollIntoView(
        {
          behavior: "smooth",
          block: "center",
          inline: "center",
        }
      );
    }, 100);
  };

  return (
    <div ref={workSpaceRef} className="WsManager">
      {workSheets.map((ws, i) => (
        <div
          key={ws.name}
          style={{ display: i === activeSheet ? "block" : "none" }}
        >
          <WorkSpace
            switchSheet={changeSheet}
            activeSheet={activeSheet}
            totalSheets={workSheets}
            addSheet={addSheet}
            key={ws.name}
          />
        </div>
      ))}
    </div>
  );
};
export default WsManager;
