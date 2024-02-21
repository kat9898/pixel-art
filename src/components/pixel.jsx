import './pixel.scss';

// Component for pixel on canvas
export const Pixel = ({pixelColor, rowInd, pixelInd, handleChange, isDownloading}) => {
  // changing image matrix state according to clicked pixel coordinate
  const onChangeColor = () => handleChange(rowInd, pixelInd);
  return (
    <div className={`pixel ${isDownloading ? 'dowloading' : ''}`} style={{backgroundColor: pixelColor}} onClick={onChangeColor}></div>
  );
}