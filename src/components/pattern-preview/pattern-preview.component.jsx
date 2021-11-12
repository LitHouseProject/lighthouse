import React from 'react';
import PatternItem from '../pattern-item/pattern-item.component';
import DIFF_PATTERNS from './patterns';
import './pattern-preview.styles.scss';


class PatternPreview extends React.Component {
    constructor() {
        super();

        this.state = {
            patterns: DIFF_PATTERNS,
        }
    }

    render() {
        return (
            <div className='pattern-preview'>
                {
                    this.state.patterns.map(( { id, ...otherPatternsProps} ) => (
                        <PatternItem key={id} {...otherPatternsProps} />
                    ))
                }
            </div>
        );
    }
}

export default PatternPreview;