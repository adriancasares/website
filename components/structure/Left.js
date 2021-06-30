import React from 'react'

import styles from './Left.module.css';

export default function Left(props) {
    return (
        <div className={styles.Left} {...props}>
            { props.children }
        </div>
    )
}
