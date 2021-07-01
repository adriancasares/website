import React from 'react'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

import { useMediaQuery } from '../hooks/hooks';
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

    const queries = []

    Object.entries(props.queries).forEach(ent => {
        queries.push([useMediaQuery(ent[0]), ent[1]])
    });

    const filteredProps = {}
    Object.entries(props).forEach(ent => {
        const [k, v] = [ent[0], ent[1]]
        if(k !== 'queries' && k !== 'side') {
            filteredProps[k] = v;
        }
    })

    return (
        <div className={className} {...filteredProps}>
            {queries.find(qry => { return qry[0] })}
        </div>
    )
}
