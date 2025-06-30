import type { ReactNode } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Read from "./pages/Read/Read";
import type { RootState } from "./store/store";
import { useSelector } from "react-redux";

export default function App(): ReactNode {
  const focusMode = useSelector((state: RootState) => state.focus.focusMode)
  return (
    <>
      {!focusMode && <Header/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/read" element={<Read/>}/>
      </Routes>
    </>
  );
}
