export function svgToImage(svg: SVGSVGElement): HTMLImageElement {
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svg);

  // Encode SVG as base64
  const svgBase64 = btoa(unescape(encodeURIComponent(svgString)));
  const dataUrl = `data:image/svg+xml;base64,${svgBase64}`;

  // Create an image element
  const img = new Image();
  img.src = dataUrl;

  return img;
}
