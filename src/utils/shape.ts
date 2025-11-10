// Shape Factory
export const createSquare = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", width.toString());
  svg.setAttribute("height", height.toString());

  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", x.toString());
  rect.setAttribute("y", y.toString());
  rect.setAttribute("width", width.toString());
  rect.setAttribute("height", height.toString());
  rect.setAttribute("fill", "royalblue");

  svg.appendChild(rect);

  return svg;
};

//<svg width="200" height="200" style="background:#eee">
//  <ellipse cx="100" cy="100" rx="50" ry="25" fill="royalblue" />
//</svg>

export const createCircle = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", (x + width * 2).toString());
  svg.setAttribute("height", (y + height * 2).toString());

  const ellipse = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse"
  );
  ellipse.setAttribute("rx", width.toString());
  ellipse.setAttribute("ry", height.toString());
  ellipse.setAttribute("cx", (x + width).toString());
  ellipse.setAttribute("cy", (y + height).toString());
  ellipse.setAttribute("fill", "red");

  svg.appendChild(ellipse);

  return svg;
};
