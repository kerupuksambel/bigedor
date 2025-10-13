import Canvas from "@/components/editor/Canvas";
import type { Vector } from "@/components/editor/elements/Vector";
import { svgToImage } from "@/utils/images";
import { useState } from "react";

const Editor = () => {
  const [elements, setElements] = useState<Vector[]>([]);

  const handleAddBox = async () => {
    try {
      const box = await svgToImage(`
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
        <rect x="5" y="5" width="70" height="70" rx="5" fill="royalblue" />
      </svg>`);

      setElements([
        ...elements,
        {
          id: `element-${elements.length + 1}`,
          image: box,
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
    } catch (error) {
      console.error("Failed to load image:", error);
    }
  };

  return (
    <div className="w-full flex items-center justify-center h-[100vh]">
      <div className="">
        <Canvas elements={elements} setElements={setElements}></Canvas>
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={handleAddBox}
        >
          Add Box
        </button>
      </div>
    </div>
  );
};

export default Editor;
