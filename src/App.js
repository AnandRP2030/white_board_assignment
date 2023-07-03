import { useEffect, useState, useRef } from "react";
import { fabric } from "fabric";
import Tools from "./Components/tools";
import "./App.css";

function App() {
  const [activeBrushColor, setActiveBrushColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [eraseActive, setEraseActive] = useState(false);
  const [eraserSize, setEraserSize] = useState(5);
  const canvasRef = useRef(null);
  const canvas = useRef(null);

  useEffect(() => {
    canvas.current = new fabric.Canvas(canvasRef.current);
    canvas.current.setHeight(window.innerHeight);
    canvas.current.setWidth(window.innerWidth);
    canvas.current.isDrawingMode = true;

    return () => {
      canvas.current.dispose();
    };
  }, []);

  useEffect(() => {
    if (canvas.current) {
      canvas.current.freeDrawingBrush.color = activeBrushColor;
      canvas.current.freeDrawingBrush.width = brushSize;
      if (eraseActive) {
        canvas.current.freeDrawingBrush.color = "#fff";
        canvas.current.freeDrawingBrush.width = eraserSize;
      }
    }
  }, [activeBrushColor, brushSize, eraseActive, eraserSize]);

  return (
    <>
      <Tools
        setActiveBrushColor={setActiveBrushColor}
        activeBrushColor={activeBrushColor}
        setBrushSize={setBrushSize}
        brushSize={brushSize}
        eraseActive={eraseActive}
        setEraseActive={setEraseActive}
        eraserSize={eraserSize}
        setEraserSize={setEraserSize}
      />
      <canvas id="canvas" ref={canvasRef} />;
    </>
  );
}

export default App;
