import React, { useRef } from "react";
import { Animate } from "react-simple-animate";

import classes from "./TextBubble.module.css";

const TextBubble = (props) => {
  const textFeild = useRef(null);

  return (
    <>
      <Animate
        play
        duration={0.2}
        start={{ opacity: 0, transform: "translateY(-200px)" }}
        end={{ opacity: 1, transform: "translateY(0px)" }}
      >
        <div
          style={{ background: props.color }}
          className={classes.Connector}
        ></div>
      </Animate>
      <Animate
        play
        delay={0.2}
        duration={0.2}
        start={{ opacity: 0, transform: "scale(0)" }}
        end={{ opacity: 1, transform: "scale(1)" }}
      >
        <textarea
          ref={textFeild}
          className={classes.BubbleInputArea}
          value={props.InputData}
          onChange={props.updateData}
          style={{ borderBottom: `3px solid ${props.color}` }}
        />
      </Animate>
      <p style={{ textAlign: "right", width: "90%", color: "grey" }}>
        {props.InputData.length}/30
      </p>
    </>
  );
};

export default TextBubble;
