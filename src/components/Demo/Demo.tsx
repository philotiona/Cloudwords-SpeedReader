import type { ReactNode} from "react";
import styles from "./Demo.module.css"
import Button from "../../common/Button/Button";
import{ useRef } from "react"

interface DemoProps {
    onSubmit: (tetx: string) => void;
}
export default function Demo({onSubmit}: DemoProps): ReactNode {
    const textareaRef = useRef<HTMLTextAreaElement>(null) 
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const text = textareaRef.current?.value || ""
        onSubmit(text)
    }
    return(
        <section className={styles.wrapper}>
            <article className={styles.article}>
                <h1 className={styles.title}>Begin Your Journey Here</h1>
                <p className={styles.content}>
                    Paste your text below or drag a file to start reading.
                </p>
            </article>
            <form action="" className={styles.reader} onSubmit={handleSubmit}>
                <label htmlFor="inputText" className={styles.inputText}>
                    Paste Your Text Here:
                    <textarea ref={textareaRef} className={styles.textarea} name="inputText" id="inputText" placeholder="Type or paste your content here..."/>
                </label>
                
                <label htmlFor="filedrop" className={styles.filedrop}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z"/></svg>
                    Click To Upload a File
                    <input type="file" id="filedrop"/>
                </label>
                <div className={styles.buttonWrap}>
                    <Button type="submit" text="Start Reading" classname="start" icon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>}/>
                </div>
            </form>
        </section>
    )
 }