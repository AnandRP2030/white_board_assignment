import { useEffect, useState, useRef } from "react";
import { fabric } from "fabric";
import BrushColor from "./Components/BrushColor";
import "./App.css";

function App() {
  const [activeBrushColor, setActiveBrushColor] = useState("#000000");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    canvas.setHeight(window.innerHeight);
    canvas.setWidth(window.innerWidth);
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 3;
    canvas.freeDrawingBrush.color = activeBrushColor;

    canvas.on("path:created", function (options) {
      const path = options.path;
      path.set("stroke", activeBrushColor);

      canvas.requestRenderAll();
    });

    return () => {
      canvas.dispose(); 
    };
  }, [activeBrushColor]);

  console.log(activeBrushColor);
  return (
    <>
      <BrushColor
        setActiveBrushColor={setActiveBrushColor}
        activeBrushColor={activeBrushColor}
      />
      <canvas id="canvas" ref={canvasRef} />;
    </>
  );
}

export default App;
