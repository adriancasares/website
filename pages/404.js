import React from 'react'

import { useEffect } from 'react'

export default function PageNotFound() {
    useEffect(() => {
        location.href = "/?from=404"
    }, [])

    return (
        <>Redirecting...</>
    )
}
