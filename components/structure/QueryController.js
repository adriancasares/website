import React from 'react'

import { useMediaQuery } from '../hooks/hooks';

export default function QueryController(props) {
    const queries = []

    Object.entries(props.queries).forEach(ent => {
        queries.push([useMediaQuery(ent[0]), ent[1]])
    });

    return (
        <>
            {queries.find(qry => { return qry[0] })}
        </>
    )
}
