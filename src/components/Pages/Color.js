import React, { useState } from "react";
import { SketchPicker } from 'react-color';


export const Color = () => {
  const [color, setColor] = useState("red");
  

  return (
    <SketchPicker 
		color={color}
		disableAlpha={true}
		onChange={updatedColor => setColor(updatedColor.hex)}/>
  );
};
