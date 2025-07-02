import type { ReactNode } from "react";
import styles from "./Demo.module.css";
import Button from "../../common/Button/Button";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { TextItem } from "pdfjs-dist/types/src/display/api";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

interface DemoProps {
  onSubmit: (text: string) => void;
}

export default function Demo({ onSubmit }: DemoProps): ReactNode {
  const location = useLocation();
  const [error, setError] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = textareaRef.current?.value || "";
    console.log(text)
    if (text.trim() === "") {
      setError(true);
      return;
    } else {
      setError(false);
      onSubmit(text);
      if (location.pathname === "/") {
        navigate("/read");
      }
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    setIsProcessing(true);
    setError(false);

    try {
      if (file.type === "application/pdf") {
        await handlePDFFile(file);
      } else if (file.type === "text/plain" || file.name.endsWith('.txt')) {
        await handleTextFile(file);
      } else {
        setError(true);
        return;
      }
    } catch (err) {
      console.error("Error processing file:", err);
      setError(true);
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handlePDFFile = async (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async function (ev) {
        try {
          const arrayBuffer = ev.target!.result as ArrayBuffer;
          const typedarray = new Uint8Array(arrayBuffer);
          const loadingTask = pdfjsLib.getDocument({ data: typedarray });
          const pdf = await loadingTask.promise;
          let text = "";

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            const pageText = content.items
              .filter((item): item is TextItem => "str" in item)
              .map((item: TextItem) => item.str)
              .join(" ");
            text += pageText + "\n";
          }

          if (text.trim()) {
            onSubmit(text);
            if (location.pathname === "/") {
              navigate("/read");
            }
            resolve();
          } else {
            reject(new Error("No text content found in PDF"));
          }
        } catch (err) {
          console.error("Error processing PDF:", err);
          reject(err);
        }
      };
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsArrayBuffer(file);
    });
  };
  const handleTextFile = async (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (ev) {
        try {
          const text = ev.target!.result as string;
          if (text.trim()) {
            onSubmit(text);
            if (location.pathname === "/") {
              navigate("/read");
            }
            resolve();
          } else {
            reject(new Error("File is empty"));
          }
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsText(file);
    });
  };

  return (
    <section className={styles.wrapper}>
      <article className={styles.article}>
        <h1 className={styles.title}>
          {location.pathname === "/read"
            ? "Enter Your New Text or Upload"
            : "Begin Your Journey Here"}
        </h1>
        <p className={styles.content}>
          Paste your text below or upload a file to start reading.
        </p>
      </article>
      <form className={styles.reader} onSubmit={handleSubmit}>
        <label htmlFor="inputText" className={styles.inputText}>
          Paste Your Text Here:
          <textarea
            ref={textareaRef}
            className={styles.textarea}
            name="inputText"
            id="inputText"
            placeholder="Type or paste your content here..."
            disabled={isProcessing}
          />
        </label>
        <div className={styles.labelError}>
          <label htmlFor="filedrop" className={styles.filedrop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z"/>
            </svg>
            {isProcessing ? "Processing..." : "Click To Upload a File"}
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.txt"
              id="filedrop"
              onChange={handleFileInput}
              disabled={isProcessing}
            />
          </label>
          <div
            className={styles.error}
            style={{ visibility: error ? "visible" : "hidden" }}
          >
            *You need to paste text or upload a valid file (PDF or TXT)
          </div>
        </div>
        <div className={styles.buttonWrap}>
          <Button
            type="submit"
            text={isProcessing ? "Processing..." : "Start Reading"}
            classname="start"
            disabled={isProcessing}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
              </svg>
            }
          />
        </div>
      </form>
    </section>
  );
}