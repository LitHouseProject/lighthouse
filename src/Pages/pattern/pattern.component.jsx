import React from 'react';
import PatternPreview from '../../components/pattern-preview/pattern-preview.component';
import './pattern.syles.scss'

const PatternPage = () => (
    <div className='pattern-page'>
        <PatternPreview />
        <div className='btn'>
            <a href="/" class="button1">Previous</a>
            <a href="" class="button2">Submit</a>
        </div>
    </div>
    
    
)

export default PatternPage;