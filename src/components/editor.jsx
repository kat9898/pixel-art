import React, { useEffect, useState } from 'react';
import { CanvasConfiguration } from './canvas-configuration';
import { canvasSizes } from '../configs/canvas-sizes';
import { paletteColors } from '../configs/palette-colors';
import { Palette } from './palette';
import { Canvas } from './canvas';
import { create2DArray } from '../helpers/create-2d-array';
import { floodFill } from '../helpers/flood-fill-algorithm';
import './editor.scss';

// Component for main part of app including cavas, palette and tools
export const Editor = () => {
  const [canvasSize, setCanvasSize] = useState(canvasSizes.small.value);
  const [selectedColor, setSelectedColor] = useState(paletteColors[0]);
  const [selectedTool, setSelectedTool] = useState('brush');
  // isDownloading state for showing that picture is exporting
  const [isDownloading, setIsDownloading] = useState(false);
  const initialImage = create2DArray(canvasSize, '#FFF');
  // image state for 2d matrix of canvas pixels color states
  const [image, setImage] = useState(initialImage);

  const printRef = React.useRef();

  const onColorChange = (e) => {
    setSelectedColor(e.target.value)
  }
  const onChangeCanvasSize = (e) => {
    setCanvasSize(e.target.value);
    // change state with new matrix size for image
    setImage(create2DArray(e.target.value, '#FFF'));
  };
  const onChangeSelectedTool = (value) => {
    setSelectedTool(value)
  };
  const onReset = () => {
    setImage(initialImage);
  }
  const handleFillingChange = (rowInd, pixelInd) => {
    setImage((prev) => {
      // coloring pixels with floodFill algorithm
      const newImg = floodFill(JSON.parse(JSON.stringify(prev)), rowInd, pixelInd, selectedColor);
      return newImg;
    })
  };
  const handlePixelChange = (rowInd, pixelInd) => {
    setImage((prev) => {
      const newImg = JSON.parse(JSON.stringify(prev));
      newImg[rowInd][pixelInd] = selectedColor;
      return newImg;
    })
  };


  return (
    <div className="editor">
      <CanvasConfiguration canvasSize={canvasSize} onChangeCanvasSize={onChangeCanvasSize} />
      <div className='editor-body'>
        <Palette 
          printRef={printRef} 
          selectedColor={selectedColor} 
          onColorChange={onColorChange} 
          selectedTool={selectedTool} 
          onChangeSelectedTool={onChangeSelectedTool} 
          onReset={onReset} 
          setIsDownloading={setIsDownloading} 
        />
        <Canvas 
          isDownloading={isDownloading} 
          printRef={printRef} 
          image={image} 
          currentColor={selectedColor} 
          initialImage={initialImage} 
          selectedTool={selectedTool} 
          onReset={onReset} 
          handlePixelChange={handlePixelChange} 
          handleFillingChange={handleFillingChange} 
        />
      </div>
    </div>
  );
}