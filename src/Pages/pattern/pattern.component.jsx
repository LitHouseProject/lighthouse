import React, {useContext} from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';
import PatternPreview from '../../components/pattern-preview/pattern-preview.component';
import { AppPatternContext } from '../../App';
import './pattern.syles.scss'

const PatternPage = () => {
    const {selectedColor, selectedPattern} = useContext(AppPatternContext);
    
    const onClickSubmit = (event) => {
        event.preventDefault();
        console.log('Clicked me')
        fetch('/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            'body': JSON.stringify({
              'color': selectedColor,
              'pattern': selectedPattern
            })
          })
          .then(
            response => {
              if (response.ok) {
                return response.json();
              }
            }
          )
    };

    return (
        <div className='pattern-page'>
            <CustomButton  onClick={onClickSubmit}>Submit</CustomButton>
            <PatternPreview />
        </div>
    );
};

export default PatternPage;