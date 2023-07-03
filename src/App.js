import { useEffect, useState, useRef } from "react";
import { fabric } from "fabric";
import Tools from "./Components/tools";
import "./App.css";

function App() {
  const [activeBrushColor, setActiveBrushColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
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
    }
    if (canvas.current) {
      canvas.current.freeDrawingBrush.width = brushSize;
    }
  }, [activeBrushColor, brushSize]);

  return (
    <>
      <Tools
        setActiveBrushColor={setActiveBrushColor}
        activeBrushColor={activeBrushColor}
        setBrushSize={setBrushSize}
        brushSize={brushSize}
      />
      <canvas id="canvas" ref={canvasRef} />;
    </>
  );
}

export default App;
