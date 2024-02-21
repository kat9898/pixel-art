import { canvasSizes } from '../configs/canvas-sizes';
import './canvas-configuration.scss';

// Component for choosing canvas size of 8x8, 12x12, 16x16, 32x32
export const CanvasConfiguration = ({canvasSize, onChangeCanvasSize}) => {
  return (
    <div className="canvas-configuration">
      <label>Select cavas size:</label>
      <select className='canvas-configuration__selector' onChange={onChangeCanvasSize} value={canvasSize}>
        <option value={canvasSizes.small.value}>{canvasSizes.small.label}</option>
        <option value={canvasSizes.medium.value}>{canvasSizes.medium.label}</option>
        <option value={canvasSizes.big.value}>{canvasSizes.big.label}</option>
        <option value={canvasSizes.huge.value}>{canvasSizes.huge.label}</option>
      </select>
    </div>
  );
}