import type { ReactNode } from "react";
import styles from "./Cards.module.css"

interface PropTypes {
    icon: ReactNode,
    title: string,
    text: string
}
export default function Cards({icon, title, text}: PropTypes): ReactNode {
    return(
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                {icon}  
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{text}</p>
        </div>
    )
}