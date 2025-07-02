import { useState, type ReactNode } from "react";
import styles from "./SignUp.module.css"
import Cloud from "../../common/Svgs/Cloud";
import Button from "../../common/Button/Button";

export default function SignUp(): ReactNode {
    const [error, setError] = useState<boolean>(false)
    return(
        <main className={styles.main}>
            <section className={styles.wrapper}>
                <div className={styles.titleWrap}>
                    <div className={styles.title}>Sign Up</div>
                    <Cloud classname="bigCloud"/>
                </div>
                <form action="submit" className={styles.form}> 
                    <label htmlFor="username" className={styles.usernameLabel}>
                        Username:
                        <input name="username"type="text" className={styles.usernameInput} placeholder="Enter your username"/>
                        <p className={styles.error} style={{visibility: error ? "visible" : "hidden"}}>*Username is required</p>
                    </label>
                    <label htmlFor="mail" className={styles.mailLabel} >
                        Email:
                        <input name="mail" type="mail" className={styles.mailInput} placeholder="Enter your email"/>
                        <p className={styles.error} style={{visibility: error ? "visible" : "hidden"}}>*Email is required</p>
                    </label>
                    <label htmlFor="password" className={styles.passwordLabel}>
                        Password:
                        <input name="password"type="password" className={styles.passwordInput} placeholder="Enter your password"/>
                        <p className={styles.error} style={{visibility: error ? "visible" : "hidden"}}>*Password is required</p>
                    </label>
                    <div className={styles.btnContainer}>
                        <Button type="submit" text="Sign Up" classname="signup"/>
                        <span className={styles.span}>or</span>
                        <Button type="button" text="Sign In" classname="signin"/>
                    </div>
                </form>
            </section>
        </main>
    )
}