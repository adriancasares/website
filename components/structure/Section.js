import React from 'react'

import styles from './Section.module.css'

export default function Section(props) {
    return (
        <div className={styles.Section} data-section-id={props.id} style={props.style}>
            { props.children }
        </div>
    )
}
