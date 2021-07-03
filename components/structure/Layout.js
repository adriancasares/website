import React from 'react'
import styles from './Layout.module.css'

import { useState, useEffect } from 'react'
export default function Layout({ children }) {

    const [displayChildren, setDisplayChildren] = useState(children)
    const [transitionStage, setTransitionStage] = useState("fadeOut")

    useEffect(() => {
        setTransitionStage("fadeIn")
    }, [])

    useEffect(() => {
        if(children !== displayChildren) setTransitionStage("fadeOut")
    }, [children, setDisplayChildren, displayChildren])

    return (
        <div className={`${styles.Layout} ${styles[transitionStage]}`} onTransitionEnd={() => {
            if (transitionStage === "fadeOut") {
                console.log("fading out");
                setDisplayChildren(children);
                setTransitionStage("fadeIn");
              }
        }}>
            { displayChildren }
        </div>
    )
}
