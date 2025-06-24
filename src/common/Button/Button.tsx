import type { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css"
interface PropTypes {
    text: string,
    type: "button" | "submit" | "reset" | undefined,
    icon?: ReactNode,
    classname: string,
    onclick?: MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean  
}

export default function Button({text, classname, icon, type, onclick}: PropTypes):ReactNode {
    return(
       <button className={`${styles.button} ${styles[classname]}`} type={type} onClick={onclick}>
            {icon}
            {text}
        </button>
    )
}