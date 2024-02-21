import './color-option.scss';

// Component for color button in pallete
export const ColorOption = ({ color, isChecked, onChange }) => {
  return (
    <input 
      style={{backgroundColor: color}} 
      className='color-option' 
      type="radio" 
      value={color} 
      checked={isChecked} 
      onChange={onChange} 
    />
  );
}