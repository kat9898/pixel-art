import { Pixel } from './pixel';
import './canvas.scss';

// Component for canvas drawing and styling cavas size
export const Canvas = ({ image, currentColor, selectedTool, handlePixelChange, handleFillingChange, printRef, isDownloading }) => {
  return (
    <div className='canvas'>
      <div ref={printRef} className="canvas-editor" style={{gridTemplateColumns: `repeat(${image.length}, 1fr)`}}>
        {
          image.map((row, rowInd) => {
            return row.map((pixel, pixelInd) => (
              <Pixel 
                isDownloading={isDownloading} 
                pixelColor={pixel} 
                rowInd={rowInd} 
                pixelInd={pixelInd} 
                currentColor={currentColor} 
                key={rowInd+pixelInd} 
                handleChange={selectedTool === 'brush' ? handlePixelChange : handleFillingChange} 
              />
            ));
          })
        }
      </div>
    </div>
  );
}