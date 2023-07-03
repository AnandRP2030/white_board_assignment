import { TiTick } from "react-icons/ti";

import "./componentStyle.css";
const BrushColor = ({ activeBrushColor, setActiveBrushColor }) => {
  const handleBrushColor = (newColor) => {
    setActiveBrushColor(newColor);
  };

  return (
    <div className="brushColorContainer">
      <button
        className="blackBrush"
        onClick={() => handleBrushColor("#000000")}
      >
        <TiTick
          display={activeBrushColor === "#000000" ? "block" : "none"}
          size={20}
        />

      </button>

      <button
        className="greenBrush"
        onClick={() => handleBrushColor("#00ff00")}
      >
        <TiTick
          display={activeBrushColor === "#00ff00" ? "block" : "none"}
          size={20}
        />
      </button>
      <button
        className="yellowBrush"
        onClick={() => handleBrushColor("#FFFF00")}
      >
        <TiTick
          display={activeBrushColor === "#FFFF00" ? "block" : "none"}
          size={20}
        />
      </button>


      <button className="redBrush" onClick={() => handleBrushColor("#ff0000")}>
        <TiTick
          display={activeBrushColor === "#ff0000" ? "block" : "none"}
          size={20}
        />
      </button>
    
      <button className="blueBrush" onClick={() => handleBrushColor("#0000ff")}>
        <TiTick
          display={activeBrushColor === "#0000ff" ? "block" : "none"}
          size={20}
        />
      </button>
    </div>
  );
};
export default BrushColor;
