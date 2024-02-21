import { ReactSVG } from 'react-svg';
import { paletteColors } from '../configs/palette-colors';
import { ColorOption } from './color-option';
import { handleDownloadImage } from '../helpers/export-image';
import './palette.scss';

// Component for selecting a tool for coloring, color and export options
export const Palette = ({selectedColor, onColorChange, selectedTool, onChangeSelectedTool, onReset, printRef, setIsDownloading}) => {
  const onDowloadImage = async (extension) => {
    // setting state for downloading for controlling clearing the borders of pixels for exporting images
    await setIsDownloading(true);
    await handleDownloadImage(printRef, extension).finally(() => setIsDownloading(false));
  };

  return (
    <div className="palette">
      <div className='palette-tools'>
        <p>Select a tool:</p>
        <section className="palette-tools__options">
          <button className={selectedTool === 'brush' ? 'active' : undefined} onClick={() => onChangeSelectedTool('brush')}>
            <ReactSVG src="brush.svg" />
          </button>
          <button className={selectedTool === 'bucket' ? 'active' : undefined} onClick={() => onChangeSelectedTool('bucket')}>
            <ReactSVG src="bucket.svg" />
          </button>
        </section>
      </div>
      <fieldset>
        <legend>Select color:</legend>
        {paletteColors.map((color, ind) => 
          <ColorOption isChecked={color === selectedColor} key={ind+color} color={color} onChange={onColorChange} />
        )}
      </fieldset>
      <button className='palette-reset' onClick={onReset}>Reset</button>
      <div className='palette-export'>
        <p>Export as:</p>
        <div className='palette-export__buttons'>
          <button onClick={() => onDowloadImage('jpeg')}>JPEG</button>
          <button onClick={() => onDowloadImage('png')}>PNG</button>
        </div>
      </div>
    </div>
  );
}