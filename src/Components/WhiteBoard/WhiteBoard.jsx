import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./WhiteBoard.module.css";
import Sidebar from "../Sidebar/Sidebar";
import MainBlock from "../../Components/MainBlock/MainBlock";
import { faSearchMinus, faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const WorkSpace = (props) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const whiteBoardRef = useRef(null);
  const zoomHandler = (inOrOut) => {
    if (inOrOut === "in") {
      let newZoom = zoomLevel.valueOf() + 0.1;
      if (newZoom <= 1) {
        setZoomLevel(newZoom);
        whiteBoardRef.current.style.transform = `scale(${newZoom})`;
      }
    }
    if (inOrOut === "out") {
      let newZoom = zoomLevel.valueOf() - 0.1;
      if (newZoom >= 0.1) {
        setZoomLevel(newZoom);
        whiteBoardRef.current.style.transform = `scale(${newZoom})`;
      }
    }
  };

  return (
    <>
      <div className={classes.WhiteBoard}>
        <div
          ref={whiteBoardRef}
          style={{
            background: "white",
            height: "500vh",
            width: "500vw",
            transitionDuration: "0.3s",
            position: "relative",
          }}
        >
          {props.blocks.map((block) => (
            <Draggable style={{ transitionDuration: "0.01ms", width: "20rem" }}>
              <div
                onClick={() => props.activateBlock(block.id)}
                style={{
                  width: "20rem",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <MainBlock
                  color={block.color}
                  title={block.name}
                  key={block.id}
                  zoom={1}
                />
              </div>
            </Draggable>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          top: "0%",
          left: "0%",
          width: "18rem",
          padding: " 1rem 1rem ",
          background: "white",
          borderRadius: "0 0 50px 0 ",
          boxShadow: "0 0 12px rgb(0, 0, 0, 0.3)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <button
            className={classes.zoomInBtn}
            onClick={() => zoomHandler("in")}
          >
            <FontAwesomeIcon icon={faSearchPlus} />
          </button>
          <button
            className={classes.zoomOutBtn}
            onClick={() => zoomHandler("out")}
          >
            <FontAwesomeIcon icon={faSearchMinus} />
          </button>
        </div>
        <Sidebar addBlock={props.addBlock} />
      </div>
    </>
  );
};

export default WorkSpace;
