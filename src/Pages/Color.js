import React, { useState } from "react";
import ReactColorPicker from "@super-effective/react-color-picker";
import Tippy from "@tippyjs/react";
import '../css/color.css';
import logo from '../images/bulblogo250px.png'
export const Color = () => {
  const [selectedColor, setSelectedColor] = useState('#3cd6bf');

  const onColorChange = (updatedColor) => {
    setSelectedColor(updatedColor);
  };

  return (
    <div className='app'>
      <h3>PICK YOUR COLOR</h3>
      
      <div className='circle' style={{ backgroundColor: selectedColor }}>
        {/*<img src= {logo} className="bulb" alt='color light bulb'/>*/}
      </div>
      
      <Tippy interactive={true} placement={'bottom'} content={
        <ReactColorPicker 
          color={ selectedColor }
          onChange={ onColorChange }
        />
      }>
        <button className='ref-button'>Change Box Color</button>
      </Tippy>
      
    </div>
  )
};
