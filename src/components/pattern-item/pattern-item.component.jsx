import React, { useContext } from 'react';
import App, { AppPatternContext } from '../../App';
import './pattern-item.styles.scss';
import DIFF_PATTERNS from '../pattern-preview/patterns';

const PatternItem = ({ name, imageUrl }) => {
    const { setPattern } = useContext(AppPatternContext);
    var id = DIFF_PATTERNS.findIndex(x => x.name === name);
    const fadeSelected = () => {
        alert("Selected: " + name.toUpperCase());
        // name = document.getElementsByClassName("large pattern-item");
        // name[id].style.opacity = 0.1;
        for (let i = 0; i < 6; i++) {
            if (i !== id) {
                name = document.getElementsByClassName("large pattern-item");
                name[i].style.opacity = 0.2;
            } else {
                name = document.getElementsByClassName("large pattern-item");
                name[i].style.opacity = 1;
            }
        }
    };
    return (
        // <div className='large pattern-item' onClick={() => setPattern(name)}>
        <div className='large pattern-item' onClick={() => { setPattern(name); fadeSelected(); }}>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />

            <div className='content'>
                <h1 className='title'>{name.toUpperCase()}</h1>
            </div>
        </div>
    );
};

export default PatternItem;