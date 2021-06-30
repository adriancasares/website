import React from 'react'

import styles from './Right.module.css';

export default function Right(props) {
    return (
        <div className={styles.Right} {...props}>
            { props.children }
        </div>
    )
}
