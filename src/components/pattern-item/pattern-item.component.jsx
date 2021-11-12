import React from 'react';
import './pattern-item.styles.scss';

const PatternItem = ({ name, imageUrl }) => (
    <div className='large pattern-item' onClick={() => console.log(name)}>
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

export default PatternItem;