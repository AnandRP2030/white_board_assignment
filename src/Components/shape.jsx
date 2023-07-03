import { fabric } from "fabric";
import { PiRectangleBold } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
import { BiShapePolygon } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import { TbSquareRounded } from "react-icons/tb";
import { BsImage } from "react-icons/bs";

const Shapes = ({ canvas, activeColor }) => {
  const addRectangle = () => {
    var rect = new fabric.Rect({
      width: 150,
      height: 150,
      fill: activeColor,
      selectable: true,
      left: 500,
      top: 100,
    });
    canvas.current.isDrawingMode = false;
    canvas.current.add(rect);
  };

  const addTriangle = () => {
    var triangle = new fabric.Triangle({
      width: 150,
      height: 150,
      fill: activeColor,
      selectable: true,
      left: 500,
      top: 100,
    });
    canvas.current.isDrawingMode = false;
    canvas.current.add(triangle);
  };
  const addCircle = () => {
    var circle = new fabric.Circle({
      radius: 100,
      fill: activeColor,
      selectable: true,
      left: 500,
      top: 100,
    });
    canvas.current.isDrawingMode = false;
    canvas.current.add(circle);
  };
  const addPolygon = () => {
    var polygon = new fabric.Polygon(
      [
        { x: 0, y: 0 },
        { x: 100, y: 0 },
        { x: 100, y: 100 },
        { x: 50, y: 150 },
        { x: 0, y: 100 },
      ],
      {
        fill: activeColor,
        selectable: true,
        left: 500,
        top: 100,
      }
    );
    canvas.current.isDrawingMode = false;
    canvas.current.add(polygon);
  };

  const addLine = () => {
    const line = new fabric.Line([50, 50, 200, 200], {
      stroke: activeColor,
      strokeWidth: 2,
      left: 500,
      top: 100,
    });
    canvas.current.isDrawingMode = false;
    canvas.current.add(line);
  };

  const addEllipse = () => {
    const ellipse = new fabric.Ellipse({
      rx: 100,
      ry: 50,
      fill: activeColor,
      left: 500,
      top: 100,
    });
    canvas.current.isDrawingMode = false;
    canvas.current.add(ellipse);
  };

  const addImage = () => {
    const imgUrl = `https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/office-photos/base/9078/afe8dada81/Selection_057/23fd9034a5f0fc2aab7b618a4ec1e58b.png`;
    fabric.Image.fromURL(imgUrl, (img) => {
      img.set({
        left: 200,
        top: 50,
        height: 500,
        width: 1000,
      });
      canvas.current.add(img);
    });
  };

  return (
    <div className="shapeContainer">
      <button className="shapeIcon" onClick={addRectangle}>
        {" "}
        <PiRectangleBold color="green" size={30} />
      </button>
      <button className="shapeIcon" onClick={addCircle}>
        {" "}
        <FaRegCircle color="green" size={30} />
      </button>
      <button className="shapeIcon" onClick={addTriangle}>
        {" "}
        <FiTriangle color="green" size={30} />
      </button>
      <button className="shapeIcon" onClick={addPolygon}>
        {" "}
        <BiShapePolygon color="green" size={30} />
      </button>
      <button className="shapeIcon" onClick={addLine}>
        {" "}
        <AiOutlineMinus color="green" size={30} />
      </button>
      <button className="shapeIcon" onClick={addEllipse}>
        {" "}
        <TbSquareRounded color="green" size={30} />
      </button>
      <button className="shapeIcon" onClick={addImage}>
        {" "}
        <BsImage color="green" size={30} />
      </button>
    </div>
  );
};
export default Shapes;
