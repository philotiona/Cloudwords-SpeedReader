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
            {icon}
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}