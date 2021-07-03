import React from 'react'
import styles from './Layout.module.css'

import { useState, useEffect } from 'react'
export default function Layout({ children }) {

    const [displayChildren, setDisplayChildren] = useState(<></>)
    const [transitionStage, setTransitionStage] = useState("fadeOut")

    useEffect(() => {
        setTransitionStage("fadeIn")
    }, [])

    useEffect(() => {
        if(children !== displayChildren) {
            setTimeout(() => {
                setDisplayChildren(children)
            }, 1000);
        }
    }, [children, setDisplayChildren, displayChildren])

    return (
        <div className={`${styles.Layout} ${styles[transitionStage]}`} onTransitionEnd={() => {
            if (transitionStage === "fadeOut") {
                setDisplayChildren(children);
                setTransitionStage("fadeIn");
              }
        }}>
            { displayChildren }
        </div>
    )
}
