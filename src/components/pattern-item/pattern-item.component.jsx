import React, {useContext} from 'react';
import { AppPatternContext } from '../../App';
import './pattern-item.styles.scss';

const PatternItem = ({ name, imageUrl }) => {
    const {setPattern} = useContext(AppPatternContext);

    return (
        <div className='large pattern-item' onClick={() => setPattern(name)}>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />

        <div className='content'>
            <h1 className='title'>{ name.toUpperCase() }</h1>
        </div>
    </div>
    );    
};

export default PatternItem;