import type { ReactNode } from "react";
import Demo from "../../components/Demo/Demo";
import WordFlow from "../../components/WordFlow/WordFlow";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { toggleDemo, setText } from "../../store/ReadingPageSlice";

export default function Read(): ReactNode {
  const dispatch = useDispatch<AppDispatch>();
  const isDemo = useSelector((state: RootState) => state.demo.demo);
  const text = useSelector((state: RootState) => state.demo.text);
  const onSubmit = (inputText: string) => {
    dispatch(setText(inputText));
    dispatch(toggleDemo());
  };

  return (
    <>{isDemo ? <Demo onSubmit={onSubmit} /> : <WordFlow text={text} />}</>
  );
}
