import React, { useState, useRef, useEffect } from "react";
import { useId } from "react-id-generator";

import classes from "./MainBlock.module.css";
import TextBubble from "../TextBubble/TextBubble";
import { storage } from "../../FireBase/Firebase";

const MainBlock = (props) => {
  const [htmlId] = useId();
  const [bubbles, setBubbles] = useState(["Type here"]);
  const [imageAsUrl, setImageAsUrl] = useState(null);

  // center viewport
  const firstBlockRef = useRef(null);
  useEffect(() => {
    firstBlockRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, []);

  // image upload
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    const uploadTask = storage.ref(`/images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl(fireBaseUrl);
            console.log(fireBaseUrl);
          });
      }
    );
  };

  // managing sub bubbles
  const addBubbleHandler = () => {
    let newBubbles = [...bubbles];
    newBubbles.push("Type here");
    setBubbles(newBubbles);
  };
  const updateBubbleHandler = (e, i) => {
    if (e.target.value.length <= 30) {
      let newVal = [...bubbles];
      newVal[i] = e.target.value;
      setBubbles(newVal);
    }
  };

  // managing zoom level
  const blockRef = useRef(null);

  return (
    <div
      ref={blockRef}
      style={{
        transitionDuration: "0.3s",
        transform: `scale(${props.zoom})`,
        width: "20rem",
        textAlign: "left",
      }}
    >
      <p style={{ color: "grey", textAlign: "left" }}>{props.title}</p>
      <div ref={firstBlockRef} className={classes.BlockContainer}>
        {!imageAsUrl ? (
          <form className={classes.ImageUpload}>
            <label
              style={{ color: `${props.color}`, opacity: "0.6" }}
              for="file-upload"
            >
              {"+"}
            </label>
            <input
              type="file"
              onChange={handleImageAsFile}
              hidden
              id="file-upload"
            />
          </form>
        ) : (
          <div
            className={classes.BlockName}
            style={{
              background: `url(${imageAsUrl})`,
              backgroundSize: "cover",
            }}
          ></div>
        )}
      </div>
      {bubbles.map((bubbleData, index) => (
        <>
          <TextBubble
            InputData={bubbleData}
            updateData={(e) => updateBubbleHandler(e, index)}
            key={htmlId}
            color={props.color}
          />
        </>
      ))}
      <button
        style={{ background: props.color }}
        className={classes.AddBtn}
        onClick={(e) => addBubbleHandler(e)}
      >
        {"+"}
      </button>
    </div>
  );
};

export default MainBlock;
