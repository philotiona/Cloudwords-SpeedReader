import type { ReactNode } from "react";
import { useState,useEffect } from "react";
import styles from "./WordFlow.module.css"
import Article from "../../common/Article/Article";
import Button from "../../common/Button/Button";
import { useDispatch } from "react-redux";
import { toggleDemo } from "../../store/ReadingPageSlice";

interface WordFlowProps {
    text: string
}
export default function WordFlow({text}: WordFlowProps): ReactNode {
    const dispatch = useDispatch()
    const [wpm, setWpm] = useState<number>(300)
    const [index, setIndex] = useState<number>(0)
    const textArray: string[] = text.split(" ")
    const [playing, setPlaying] = useState<boolean>(false)
    const handlePlay = () => {
      setPlaying(!playing)
    }
    useEffect(() => {
      if(playing) {
        if (index>=textArray.length) return;
          const interval = setInterval(() => {
              setIndex(i => i + 1)
          }, 60000 / wpm
          );
          return () => clearInterval(interval)
      } 
    }) 
    const handleLoad = () => {
      dispatch(toggleDemo())
    }
    const handleRestart =() =>  {
      setIndex(0)
    }
    return(
      <main className={styles.readMain}>
      <Article
        classname="readArticle"
        content="Experience the gentle rhythm of cloud-reading"
        title="Feel Words Flow"
      />
      <section className={styles.readerWrap}>
        <div className={styles.wordContainer}>
          <p className={styles.wordFlow}>
            {index < textArray.length ? textArray[index] : "Load New Text or Restart"}
          </p>
          <p className={styles.infoBar}>{index} of {textArray.length} words are read</p>
        </div>
        <div className={styles.readButtons}>
          <Button
            onclick={handlePlay}
            type="button"
            text=""
            icon={
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 11L10 16H15L12 21M6 16.4438C4.22194 15.5683 3 13.7502 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            classname="playButton"
          />
          <Button
          onclick={handleRestart}
            type="button"
            text=""
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z" />
              </svg>
            }
            classname="retryButton"
          />
          <Button
            type="button"
            text="Focus Mode"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M792-56 686-160H260q-92 0-156-64T40-380q0-77 47.5-137T210-594q3-8 6-15.5t6-16.5L56-792l56-56 736 736-56 56ZM260-240h346L284-562q-2 11-3 21t-1 21h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm185-161Zm419 191-58-56q17-14 25.5-32.5T840-340q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-27 0-52 6.5T380-693l-58-58q35-24 74.5-36.5T480-800q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 39-15 72.5T864-210ZM593-479Z" />
              </svg>
            }
            classname="focusModeButton"
          />
        </div>
        <div className={styles.readTypes}>
          <Button type="button" text="Flash" classname="readFlash" />
          <Button type="button" text="Underline" classname="readUnderline" />
          <Button type="button" text="Chunks" classname="readChunks" />
        </div>
        <div className={styles.slider}>
          <label htmlFor="slider" className={styles.label}>Wind Speed: {wpm} words per minute</label>
          <div className={styles.inputDescription}>
            <input
            className={styles.range}
              id="slide"
              type="range"
              max="600"
              min="100"
              onChange={(e) => {
                setWpm(Number(e.target.value));
              }}
            />
            <div className={styles.slowFast}>
              <p className={styles.ptag}>Slow</p>
              <p className={styles.ptag}>Fast</p>
            </div>
          </div>
        </div>
        <span className={styles.span}>or</span>
        <Button onclick={handleLoad}type="button" text="Load New Text" icon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z"/></svg>} classname="readLoad"/>
      </section>
    </main>
    )
}