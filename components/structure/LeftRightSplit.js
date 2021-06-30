import React from 'react'

import styles from './LeftRightSplit.module.css'

export default function LeftRightSplit(props) {
    return (
        <div className={styles.LeftRightSplit} style={{ maxWidth: props.maxWidth}}>
            {props.children}
        </div>
    )
}
