import React from 'react'
import PolkaDot from './PolkaDot'

import styles from './PolkaDotArray.module.css'

export default function PolkaDotArray(props) {
    const size = props.size;
    const dots = []
    for(let i = 1; i <= size; i++) {
        for(let j = 0; j < i; j++) {
            dots.push(
                <PolkaDot key={`${i},${j}`} style={{transform: `translate(${(size - j) * 110}px, ${(size - i) * 110}px)`, backgroundColor: `var(--about-panel-extra-color-${(size - j)})`}}></PolkaDot>
            )
        }
    }

    return (
        <div className={styles.PolkaDotArray} style={{transform: `translateX(${(size * -110) - 60}px)`}}>
            {dots}        
        </div>
    )
}
