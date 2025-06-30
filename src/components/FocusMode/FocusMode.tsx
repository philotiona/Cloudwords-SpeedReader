import type { ReactNode } from "react";
import styles from "./FocusMode.module.css"
interface PropTypes {
    word: string,
    text: string
}

export default function FocusMode({word} : PropTypes): ReactNode {
    return(
        <div className={styles.wrapper}>
            <p>{word}</p>
        </div>
    )
}