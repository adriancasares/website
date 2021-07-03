import React from 'react'

import styles from './PolkaDot.module.css'

export default function PolkaDot(props) {
    var size;
    switch(props.size) {
        case 1:
            size = styles.Small
            break;
        case 2:
            size = styles.Medium
            break;
        default:
            size = styles.Large
            break;
    }

    const filteredProps = {}
    Object.entries(props).forEach(ent => {
        const [k, v] = [ent[0], ent[1]]
        if(k !== 'size') {
            filteredProps[k] = v;
        }
    })

    return <div className={`${styles.PolkaDot} ${size}`} {...filteredProps}/>
}
