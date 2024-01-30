import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Header } from '../components';
import { TwitterPicker } from 'react-color';

const PencilSVG = ({ color }) => (
 <svg fill={color} height="136px" width="176px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
  xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.98 31.98" xmlSpace="preserve" stroke="" 
  stroke-width="0.383784" transform="rotate(45)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g 
  id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
  <g> <path d="M3.952,23.15L0,31.955l8.767-3.992l0.018,0.019L3.938,23.13L3.952,23.15z M4.602,22.463L24.634,2.432l4.849,4.848 L9.45,27.312L4.602,22.463z M30.883,0.941c-2.104-1.963-4.488-0.156-4.488-0.156l4.851,4.843 C31.244,5.627,33.124,3.375,30.883,0.941z"></path> </g> </g></svg>
);

const InlineColorPicker = ({ onColorChange }) => {
  return (
    <TwitterPicker
      colors={[
        '#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3',
        '#EB144C', '#612C6C', '#000', '#919155', '#374766', '#9A6435', '#5C5C92',
        '#BD10E0', '#8D0D47', '#F8E71C', '#417505', '#FF0929', '#143671', '#BB757E', '#E2D758'
      ]}
      onChange={(color) => onColorChange(color.hex)}
    />
  );
};

const ColorPicker = () => {
  const [color, setColor] = useState('#000');

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const handleInlineColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="mt-24 md:m-10   md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />

      <div style={{marginLeft:'auto', marginRight:'auto', height:"116px", width:"176px"}} className='m-0'>
      <PencilSVG color={color}/>
      </div>

      <div className="flex justify-around">
        <div>
          {/* Sketch Picker */}
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
          <SketchPicker
            color={color}
            onChange={handleColorChange}
            styles={{ default: { picker: { width: '300px' } } }}
            disableAlpha={false}
          />
        </div>

        <div>
          {/* Inline Palette */}
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
          <InlineColorPicker onColorChange={handleInlineColorChange} />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;








