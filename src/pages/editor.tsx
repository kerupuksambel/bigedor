import Canvas from "@/components/editor/Canvas";
import {
  ActionType,
  VectorType,
  type Action,
} from "@/components/editor/elements/Action";
import type { Vector } from "@/components/editor/elements/Vector";
import { svgToImage } from "@/utils/images";
import { createCircle, createSquare } from "@/utils/shape";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Editor = () => {
  const [elements, setElements] = useState<Vector[]>([]);
  const [actions, setActions] = useState<Action[]>([]);

  const handleAddBox = async () => {
    try {
      const box = createSquare(5, 5, 70, 70);
      const boxImage = await svgToImage(box);
      const boxID = uuidv4();

      setElements([
        ...elements,
        {
          id: `element-${elements.length + 1}`,
          image: boxImage,
          x: 5,
          y: 5,
          z: 1,
          rotation: 0,
          width: 70,
          height: 70,
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          isDragged: false,
          isSelected: false,
          isRotated: false,
        },
      ]);

      setActions([
        ...actions,
        {
          type: ActionType.NEW_VECTOR,
          payload: {
            id: boxID,
            type: VectorType.SQUARE,
            x: 5,
            y: 5,
            width: 70,
            height: 70,
          },
        },
      ]);
    } catch (error) {
      console.error("Failed to load image:", error);
    }
  };

  const handleAddCircle = async () => {
    try {
      const circle = createCircle(5, 5, 70, 70);
      const circleImage = await svgToImage(circle);
      const circleID = uuidv4();

      setElements([
        ...elements,
        {
          id: circleID,
          image: circleImage,
          x: 5,
          y: 5,
          z: 1,
          rotation: 0,
          width: 70,
          height: 70,
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          isDragged: false,
          isSelected: false,
          isRotated: false,
        },
      ]);

      setActions([
        ...actions,
        {
          type: ActionType.NEW_VECTOR,
          payload: {
            id: circleID,
            type: VectorType.SQUARE,
            x: 5,
            y: 5,
            width: 70,
            height: 70,
          },
        },
      ]);
    } catch (error) {
      console.error("Failed to load image:", error);
    }
  };

  return (
    <div className="w-full flex items-center justify-center h-[100vh]">
      <div className="">
        <Canvas
          elements={elements}
          setElements={setElements}
          actions={actions}
          setActions={setActions}
        ></Canvas>
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={handleAddBox}
        >
          Add Box
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={handleAddCircle}
        >
          Add Circle
        </button>
      </div>
    </div>
  );
};

export default Editor;
