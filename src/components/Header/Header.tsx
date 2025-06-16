import { useState, type ReactNode } from "react";
import styles from "./Header.module.css"
import Button from "../../common/Button/Button";

export default function Header(): ReactNode {
    const [loggedIn, setLoggedIn] = useState<boolean>(true)
    const token = localStorage.getItem("token")
    if(token) {
        setLoggedIn(true)
    }
    return(
        <div className={styles.wrapper}>
            <a href="/" className={styles.logo}>
                <svg className={styles.image} 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="48" height="48">
                <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20.2399 11.13C22.5715 11.6398 23.8975 13.5719 23.9387 15.5304C23.9621 16.6435 23.5704 17.778 22.7096 18.6344C21.8421 19.4974 20.5784 20 19 20L5.99998 20C2.02365 20 -0.0242426 16.479 0.251895 13.4332C0.393417 11.8721 1.13579 10.3317 2.5915 9.33656C3.90985 8.43533 5.69737 8.05913 7.9083 8.37933C8.83295 6.4967 10.0762 5.26023 11.4894 4.61875C13.059 3.90625 14.7191 3.98305 16.1474 4.55674C18.6351 5.55597 20.6366 8.19432 20.2399 11.13ZM12.3161 6.43991C11.3069 6.89799 10.2552 7.90321 9.45494 9.808C9.25032 10.295 8.72745 10.5665 8.2162 10.4625C6.04892 10.0217 4.61209 10.3779 3.72019 10.9876C2.82796 11.5976 2.33961 12.5561 2.24373 13.6137C2.04505 15.8052 3.49564 18 5.99998 18L19 18C20.1447 18 20.8687 17.6447 21.299 17.2166C21.736 16.7818 21.9522 16.192 21.9392 15.5724C21.9134 14.347 20.991 13.0534 19.1179 13.0016C18.3877 12.9815 17.8631 12.2597 18.0981 11.5493C18.7918 9.45185 17.4546 7.23709 15.402 6.41263C14.4136 6.01564 13.3264 5.9813 12.3161 6.43991Z"/>
                </svg>
                CloudWord    
            </a>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={styles.listItem}><a href="" className={styles.listAnchors}>Home</a></li>
                    <li className={styles.listItem}><a href="" className={styles.listAnchors}>Read</a></li>
                    <li className={styles.listItem}><a href="" className={styles.listAnchors}>Learn</a></li>
                </ul>
                {loggedIn ? 
                <div className={styles.buttons}>
                    <Button type="button" text="" classname="user" icon={<svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1080 1080"
                    preserveAspectRatio="xMidYMid meet"
                    width="50"
                    height="50">
                    <g transform="translate(0,1080) scale(0.1,-0.1)" fill="currentColor" stroke="none">
                    <path d="M5419 7110 c-327 -52 -608 -223 -792 -481 l-46 -66 -63 9 c-86 13 -236 3 -333 -21 -44 -12 -122 -41 -172 -66 -522 -257 -666 -940 -290 -1381 139 -163 304 -261 519 -304 92 -19 141 -20 1265 -20 1132 0 1172 1 1247 20 231 59 422 243 503 485 23 70 27 96 27 210 1 148 -17 225 -82 350 -54 104 -191 239 -298 292 -45 22 -103 46 -131 53 l-49 13 -23 83 c-107 389 -453 712 -861 805 -97 23 -333 33 -421 19z m402 -198 c289 -76 541 -286 662 -551 16 -36 42 -114 57 -174 15 -60 35 -116 43 -124 8 -8 52 -24 97 -34 113 -26 192 -70 272 -150 163 -164 203 -407 102 -616 -45 -94 -152 -207 -235 -247 -121 -58 -65 -56 -1314 -56 -1226 1 -1228 1 -1357 50 -149 56 -307 200 -379 344 -51 104 -68 168 -76 286 -8 131 13 236 74 360 39 80 60 109 137 186 78 78 106 98 186 137 158 76 313 94 489 56 79 -17 98 -4 172 109 156 239 400 397 685 442 93 14 297 5 385 -18z"/>
                    <path d="M5260 4644 c-440 -38 -768 -150 -1081 -370 -374 -263 -607 -642 -651 -1057 -13 -130 -7 -175 29 -218 50 -58 116 -73 182 -40 59 31 72 59 86 195 14 130 18 149 45 241 111 369 468 703 915 854 574 194 1234 101 1686 -238 229 -172 391 -390 459 -616 27 -92 31 -111 45 -241 14 -136 27 -164 86 -195 66 -33 132 -18 182 40 36 43 42 88 29 216 -75 717 -709 1291 -1557 1410 -105 15 -374 26 -455 19z"/>
                    </g>
                    </svg>}
                    />
                    <Button text ="Logout" classname="logout" type="button"/>
                </div> :  
                <div>
                    <Button text = "Login" classname="login" type="button"/>
                    <span>or</span>
                    <Button text="Sign Up" classname="signup" type="button"/>
                </div>}
            </nav>
        </div>
    )
}