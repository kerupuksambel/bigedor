export enum ActionType {
  // New Element
  NEW_VECTOR = "new_vector",
  NEW_IMAGE = "new_image",

  // Transform element
  MOVE_ELEMENT = "move_element",
}

export enum VectorType {
  SQUARE = "square",
  CIRCLE = "circle",
}

interface ActionPayloadMap {
  [ActionType.NEW_VECTOR]: {
    id: string; // UUID
    type: VectorType;
    x: number;
    y: number;
    width: number;
    height: number;
  };
  [ActionType.NEW_IMAGE]: {
    id: string; // UUID
    x: number;
    y: number;
    source: string;
  };

  [ActionType.MOVE_ELEMENT]: {
    elementID: string;
    srcX: number;
    srcY: number;
    dstX: number;
    dstY: number;
  };
}

export type Action<T extends ActionType = ActionType> = {
  type: ActionType;
  payload: ActionPayloadMap[T];
};
