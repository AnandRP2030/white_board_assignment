import { fabric } from "fabric";

const Shapes = ({ canvas }) => {
  const addRectangle = () => {
    var rect = new fabric.Rect({
      width: 150,
      height: 200,
      fill: "red",
      selectable: true,
      left: 100,
      top: 100,
    });
    canvas.current.isDrawingMode = false;
    rect.on("moved", (event) => {
      const { left, top } = event.target;
      console.log("New position:", left, top);
    });

    canvas.current.add(rect);
  };
  return (
    <div className="shapeContainer">
      <h1> Shape </h1>
      <button onClick={addRectangle}> rectangle </button>
    </div>
  );
};
export default Shapes;
