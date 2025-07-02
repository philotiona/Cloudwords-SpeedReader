import type { ReactNode } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Read from "./pages/Read/Read";
import type { RootState } from "./store/store";
import { useSelector } from "react-redux";
import SignUp from "./authorization/SignUp/SignUp";

export default function App(): ReactNode {
  const location = useLocation()
  const focusMode = useSelector((state: RootState) => state.focus.focusMode)
  const inSignUp:boolean = location.pathname === "/signup"
  return (
    <>
      {!focusMode && !inSignUp && <Header/>}
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/read" element={<Read/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </>
  );
}
