import ReactColorPicker from "@super-effective/react-color-picker";
import Tippy from "@tippyjs/react";
import '../css/color.css';

import { Link } from "react-router-dom";


export const Color = ({selectedColor, setSelectedColor}) => {
  console.log(selectedColor);
  return (
    <div className='app'>
      
      <h3>PICK YOUR COLOR</h3>
      
      <div className='circle' style={{ backgroundColor: selectedColor }}>
      </div>
      
      <Tippy interactive={true} placement={'bottom'} content={
        <ReactColorPicker 
          name={'color'}
          color={ selectedColor }
          onChange={ setSelectedColor }
        />
      }>
        <button className='ref-button'>Change Box Color</button>
      </Tippy>
      <div className='btn'>
        <Link to='/pattern' className='button1'>Next</Link>
      </div>
    </div>
  )
};
