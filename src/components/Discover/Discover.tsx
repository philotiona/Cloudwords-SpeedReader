import type { ReactNode } from "react";
import styles from "./Discover.module.css";
import Cards from "../Cards/Cards";

export default function Discover(): ReactNode {
  return (
    <section className={styles.discoverHero}>
      <article className={styles.article}>
        <h1 className={styles.titleDiscover}>Reading as Natural Flow</h1>
        <p className={styles.ptag}>
          Discover techniques that work with your mind, not against it
        </p>
      </article>
      <div className={styles.techniques}>
        <Cards
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="currentColor"
            >
              <path d="M40-360v-240h140q25 0 42.5 17.5T240-540v40q0 18-10.5 33T204-444l36 84h-60l-34-80h-46v80H40Zm240 0v-60h120v-30h-80q-17 0-28.5-11.5T280-490v-70q0-17 11.5-28.5T320-600h140v60H340v30h80q17 0 28.5 11.5T460-470v70q0 17-11.5 28.5T420-360H280Zm290 0-70-240h60l40 137 40-137h60l-70 240h-60Zm150 0v-240h140q25 0 42.5 17.5T920-540v40q0 25-17.5 42.5T860-440h-80v80h-60ZM100-500h80v-40h-80v40Zm680 0h80v-40h-80v40Z" />
            </svg>
          }
          title="Flashing"
          text="Watch words appear one by one, like clouds drifting across your visual field. No eye strain, no rushing—just pure focus on meaning."
        />
        <Cards
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="currentColor"
            >
              <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
            </svg>
          }
          title="Underline"
          text="Highlighting words as you read, guiding your focus through the text like a path through a cloudscape. Reinforce understanding with visual anchors."
        />
        <Cards
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="currentColor"
            >
              <path d="M400-40v-80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200v-80h80v880h-80ZM200-200h200v-80H280v-80h120v-80H280v-80h120v-80H280v-80h120v-80H200v560Zm360-560v-80h200q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H560v-80h200v-560H560Zm0 320v-80h120v80H560Zm0-160v-80h120v80H560ZM400-480Z" />
            </svg>
          }
          title="Pheripheral"
          text="Expand your focus to take in three words at once, with only the central word highlighted. Train your peripheral vision to capture meaning from the edges, effortlessly boosting your reading speed and span."
        />
      </div>
    </section>
  );
}
