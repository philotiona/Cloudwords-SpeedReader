import type { ReactNode } from "react";
import styles from "./Article.module.css"
interface PropTypes {
    title: string,
    content: string,
    classname: string
}

export default function Article({title, content, classname}: PropTypes): ReactNode {
    return(
        <article className={`${styles[classname]} ${styles.article}`}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.content}>
                    {content}
                </p>
            </article>
    )
}