import { useEffect, useRef, useState } from "react";
import { ActionType, type Action } from "./elements/Action";
import type { Vector } from "./elements/Vector";

interface CanvasProps {
  elements: Vector[];
  actions: Action[];
  setElements: (x: any) => void;
  setActions: (x: Action[]) => void;
}

const Canvas = ({
  elements,
  actions,
  setElements,
  setActions,
}: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [draggedElement, setDraggedElement] = useState<Vector | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    console.log(elements);

    const draw = () => {
      //   ctx.clearRect(0, 0, canvas.width, canvas.height);
      //   ctx.fillStyle = "#007bff";
      //   ctx.fillRect(pos.x, pos.y, 80, 80);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      for (const v of elements) {
        ctx.save();
        ctx.globalAlpha = v.opacity;
        ctx.translate(v.x + v.width / 2, v.y + v.height / 2);
        ctx.rotate(v.rotation);
        ctx.scale(v.scaleX, v.scaleY);
        ctx.drawImage(v.image, -v.width / 2, -v.height / 2, v.width, v.height);
        ctx.restore();
      }
    };

    draw();
  }, [elements]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    elements.forEach((element) => {
      if (
        mouseX >= element.x &&
        mouseX <= element.x + 80 &&
        mouseY >= element.y &&
        mouseY <= element.y + 80
      ) {
        setDraggedElement(element);
        setOffset({ x: mouseX - element.x, y: mouseY - element.y });
      }
    });
  };

  const handleMouseUp = () => setDraggedElement(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedElement) return;

    const rect = canvasRef.current!.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // const newElements = ;
    setElements([
      ...elements.filter((element) => element.id !== draggedElement.id),
      {
        ...draggedElement,
        x: mouseX - offset.x,
        y: mouseY - offset.y,
      },
    ]);
    setActions([
      ...actions,
      {
        type: ActionType.MOVE_ELEMENT,
        payload: {
          elementID: draggedElement.id,
          srcX: mouseX - offset.x,
          srcY: mouseY - offset.y,
          dstX: mouseX,
          dstY: mouseY,
        },
      },
    ]);
  };

  //   const drawVector = (ctx: CanvasRenderingContext2D, v: Vector) => {
  //     ctx.save();
  //     ctx.globalAlpha = v.opacity;
  //     ctx.translate(v.x + v.width / 2, v.y + v.height / 2);
  //     ctx.rotate(v.rotation);
  //     ctx.scale(v.scaleX, v.scaleY);
  //     ctx.drawImage(v.image, -v.width / 2, -v.height / 2, v.width, v.height);
  //     ctx.restore();
  //   };

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={800}
      style={{
        border: "1px solid #ccc",
        cursor: draggedElement ? "grabbing" : "default",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    ></canvas>
  );
};

export default Canvas;
