import React from "react";

import classes from "./BlockControls.module.css";

const BlockControls = (props) => {
  const colors = ["red", "black", "blue", "orange", "grey", "purple"];

  return (
    <div className={classes.ControlsWrapper}>
      <div>
        <p>Active Block:</p>
        <h1>Block {props.activeBlock}</h1>
      </div>
      <div style={{ width: "100%" }}>
        <p>Block Color</p>
        <div
          style={{
            display: "flex",
            width: "80%",
            justifyContent: "space-between",
            margin: " 0 auto",
          }}
        >
          {colors.map((color) => (
            <div
              key={color}
              className={classes.color}
              style={{ background: `${color}` }}
              onClick={() => props.changeColor(`${color}`)}
            ></div>
          ))}
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <p>Your Worksheets</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            width: "80%",
            justifyContent: "space-between",
            margin: " 1rem auto",
            color: "white",
          }}
        >
          {props.totalSheets.map((sheet, i) => (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                className={classes.sheet}
                style={{
                  border:
                    i === props.activeSheet
                      ? "3px solid black"
                      : "1px solid grey",
                }}
                onClick={() => props.switchSheet(i)}
              >
                {i + 1}
              </div>
              <p style={{ fontSize: "0.5rem" }}>{sheet.name}</p>
            </div>
          ))}
          <div
            style={{
              border: "1px solid grey",
            }}
            className={classes.sheet}
            onClick={props.addSheet}
          >
            {"+"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockControls;
