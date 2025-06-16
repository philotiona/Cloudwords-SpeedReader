import type { ReactNode } from "react";
import styles from "./Button.module.css"
interface PropTypes {
    text: string,
    type: "button" | "submit" | "reset" | undefined,
    icon?: ReactNode,
    classname: string,
}

export default function Button({text, classname, icon, type}: PropTypes):ReactNode {
    return(
       <button className={`${styles.button} ${styles[classname]}`} type={type}>
            {icon}
            {text}
        </button>
    )
}