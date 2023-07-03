import { TiTick } from "react-icons/ti";
import { BsFillPencilFill } from "react-icons/bs";
import "./componentStyle.css";

const Tools = ({ activeBrushColor, setActiveBrushColor, setBrushSize, brushSize }) => {
  const handleBrushColor = (newColor) => {
    setActiveBrushColor(newColor);
  };

  const handleBrushSize = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setBrushSize(newSize);
  }

  console.log(brushSize, 'bs  ')

  return (
    <>
      <div className="drawTools">
        <div className="brushColorContainer">
          <button
            className="penTool"
            style={{ backgroundColor: activeBrushColor }}
          >
            <BsFillPencilFill size={15} color="white" />
          </button>

          <input type="range" min='1' max='50' value={brushSize} onChange={handleBrushSize}/>
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

          <button
            className="redBrush"
            onClick={() => handleBrushColor("#ff0000")}
          >
            <TiTick
              display={activeBrushColor === "#ff0000" ? "block" : "none"}
              size={20}
            />
          </button>

          <button
            className="blueBrush"
            onClick={() => handleBrushColor("#0000ff")}
          >
            <TiTick
              display={activeBrushColor === "#0000ff" ? "block" : "none"}
              size={20}
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default Tools;
