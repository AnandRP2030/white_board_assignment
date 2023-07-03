import { TiTick } from "react-icons/ti";
import { BsFillPencilFill } from "react-icons/bs";
import { FaEraser } from "react-icons/fa";
import "./componentStyle.css";

const Tools = (props) => {
  const {
    activeBrushColor,
    setActiveBrushColor,
    setBrushSize,
    brushSize,
    eraseActive,
    setEraseActive,
    eraserSize,
    setEraserSize,
  } = props;

  const handleBrushColor = (newColor) => {
    setActiveBrushColor(newColor);
    setEraseActive(false);
  };

  const handleBrushSize = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setBrushSize(newSize);
  };

  const toggleEraser = () => {
    setEraseActive(!eraseActive);
  };

  const handleEraserSize = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setEraserSize(newSize);
  };

  return (
    <>
      <div className="toolsContainer">
        <button
          className="penTool"
          style={{ backgroundColor: activeBrushColor }}
        >
          <BsFillPencilFill size={15} color="white" />
        </button>

        <input
          type="range"
          min="1"
          max="50"
          value={brushSize}
          onChange={handleBrushSize}
        />

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

        <button
          className="eraserBtn"
          style={{ opacity: !eraseActive ? 0.7 : 1 }}
          onClick={toggleEraser}
        >
          <FaEraser />
        </button>

        <input
          type="range"
          style={{ opacity: !eraseActive ? 0.7 : 1 }}
          min="1"
          max="50"
          value={eraserSize}
          onChange={handleEraserSize}
        />
      </div>
    </>
  );
};
export default Tools;
