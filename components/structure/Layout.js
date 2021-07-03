import React from 'react'
import styles from './Layout.module.css'

export default function Layout({ children }) {

    return (
        <div className={`${styles.Layout}`}>
            { children }
        </div>  
    )
    // const [displayChildren, setDisplayChildren] = useState(<></>)
    // const [transitionStage, setTransitionStage] = useState("fadeOut")

    // useEffect(() => {
    //     setDisplayChildren(<h1>hello</h1>)
    // }, [])

    // useEffect(() => {
    //     if(children !== displayChildren) {
            
    //         setTimeout(() => {
    //             setDisplayChildren(children);
    //         }, 1000);
    //     }
    // }, [children, setDisplayChildren, displayChildren])

    // return (
    //     <div className={`${styles.Layout} ${styles[transitionStage]}`}>
    //         { displayChildren }
    //     </div>
    // )
}
