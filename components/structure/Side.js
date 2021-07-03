import React from 'react'

import styles from './Side.module.css';


export default function Side(props) {
    var className;
    switch(props.side) {
        case 'left':
            className = `${styles.Left} ${styles.Side}`
            break
        case 'right':
            className = `${styles.Right} ${styles.Side}`
            break
    }

    const filteredProps = {}
    Object.entries(props).forEach(ent => {
        const [k, v] = [ent[0], ent[1]]
        if(k !== 'side') {
            filteredProps[k] = v;
        }
    })

    return (
        <div className={className} {...filteredProps}>
            {props.children}
        </div>
    )
}
