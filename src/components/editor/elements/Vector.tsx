export interface Vector {
  // Object
  id: string;
  image: HTMLImageElement;
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
  opacity: number;

  // Canvas-related
  isDragged: boolean;
  isSelected: boolean;
  isRotated: boolean;
}
