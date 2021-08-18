import React, { useState, useEffect, useRef } from "react";

import WhiteBoard from "../../Components/WhiteBoard/WhiteBoard";
import BlockControls from "../../Components/BlockControls/BlockControls";

const WorkSpace = (props) => {
  const [blocks, setBlocks] = useState([
    { name: "block 1", id: 1, color: "red" },
  ]);
  const [activeBlock, setActiveBlock] = useState(1);

  const addBlockHandler = () => {
    let newBlocks = [...blocks];
    newBlocks.push({
      name: "block " + (blocks.length + 1),
      id: blocks.length + 1,
      color: "blue",
    });
    setBlocks(newBlocks);
  };

  const activateBlockHandler = (id) => {
    setActiveBlock(id);
    console.log(activeBlock);
  };

  const changeBlockColorHandler = (color) => {
    let newBlocks = [...blocks];
    let newBlock = newBlocks.find((el) => el.id === activeBlock);
    newBlock.color = color;
    console.log(newBlocks);
    setBlocks(newBlocks);
  };

  return (
    <div style={{ display: "flex" }}>
      <WhiteBoard
        activateBlock={(id) => activateBlockHandler(id)}
        blocks={blocks}
        addBlock={addBlockHandler}
      />
      <BlockControls
        activeBlock={activeBlock}
        changeColor={(color) => changeBlockColorHandler(color)}
        switchSheet={props.switchSheet}
        activeSheet={props.activeSheet}
        totalSheets={props.totalSheets}
        addSheet={props.addSheet}
      />
    </div>
  );
};

export default WorkSpace;
