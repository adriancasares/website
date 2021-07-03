import React from 'react'
import PolkaDot from './PolkaDot'

import styles from './PolkaDotArray.module.css'

export default function PolkaDotArray(props) {
    const size = props.size || 3;
    const colorOffset = props.colorOffset || 0;
    
    var space;
    switch(size) {
        case 1:
            space = 50;
            break;
        case 2:
            space = 75;
            break
        default:
            space = 100;
            break
    }

    const length = props.length;
    const dots = []
    for(let i = 1; i <= length; i++) {
        if(props.invertedStaircase) {
            for(let j = 0; j <= (length - i); j++) {
                dots.push(
                    <PolkaDot key={`${i},${j}`} size={size} style={{transform: `translate(${(length - j) * space}px, ${(length - i) * space}px)`, backgroundColor: `var(--about-panel-extra-color-${(length - j + colorOffset)})`}}></PolkaDot>
                )
            }
        } else {
            for(let j = 0; j < i; j++) {
                dots.push(
                    <PolkaDot key={`${i},${j}`} size={size} style={{transform: `translate(${(length - j) * space}px, ${(length - i) * space}px)`, backgroundColor: `var(--about-panel-extra-color-${(length - j + colorOffset)})`}}></PolkaDot>
                )
            }
        }
    }

    return (
        <div className="PolkaDotArray__Wrapper" style={props.style}>
            <div className={styles.PolkaDotArray} style={{transform:`translateX(${(length * -1 * space) - 60}px)`}}>
                {dots}        
            </div>
        </div>
    )
}
