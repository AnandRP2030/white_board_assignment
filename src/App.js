import { useEffect, useState, useRef } from "react";
import { fabric } from "fabric";
import Tools from "./Components/tools";
import "./App.css";
import Shapes from "./Components/shape";

function App() {
  const [activeBrushColor, setActiveBrushColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [eraseActive, setEraseActive] = useState(false);
  const [eraserSize, setEraserSize] = useState(5);
  const [zoomOn, setZoomOn] = useState(false);
  const canvasRef = useRef(null);
  const canvas = useRef(null);
  const [totalPages, setTotalPages] = useState([{ pageNo: 1 }]);

  useEffect(() => {
    canvas.current = new fabric.Canvas(canvasRef.current);
    canvas.current.setHeight(window.innerHeight);
    canvas.current.setWidth(window.innerWidth);
    canvas.current.isDrawingMode = true;
    canvas.current.freeDrawingBrush.color = activeBrushColor;
    canvas.current.freeDrawingBrush.width = brushSize;

    return () => {
      canvas.current.dispose();
    };
  }, [totalPages]);

  const zoomToggle = () => {
    console.log("zm", zoomOn);
    const zoomHandler = (opt) => {
      var delta = opt.e.deltaY;
      var zoom = canvas.current.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      canvas.current.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    };

    if (zoomOn) {
      canvas.current.off("mouse:wheel", zoomHandler);
      setZoomOn(false);
    } else {
      canvas.current.on("mouse:wheel", zoomHandler);
      setZoomOn(true);
    }
  };

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

  const createNewPage = () => {
    const newPageNo = totalPages.length + 1;
    const newObj = { pageNo: newPageNo };
    setTotalPages((prevPages) => [...prevPages, newObj]);
  };

  return (
    <div style={{ width: "100%" }}>
      <Tools
        setActiveBrushColor={setActiveBrushColor}
        activeBrushColor={activeBrushColor}
        setBrushSize={setBrushSize}
        brushSize={brushSize}
        eraseActive={eraseActive}
        setEraseActive={setEraseActive}
        eraserSize={eraserSize}
        setEraserSize={setEraserSize}
        canvas={canvas}
      />
      <Shapes activeColor={activeBrushColor} canvas={canvas} />

      <div className="pageNoContainer">
        <button onClick={createNewPage}>New Page</button>
        <button onClick={zoomToggle}> Zoom On</button>
      </div>

      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
}

export default App;
