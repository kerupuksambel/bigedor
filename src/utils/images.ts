export function svgToImage(svg: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image();
    const blob = new Blob([svg], { type: "image/svg+xml" });
    img.src = URL.createObjectURL(blob);
    img.onload = () => resolve(img);
  });
}
