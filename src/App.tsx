import type { ReactNode } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Read from "./pages/Read/Read";

export default function App(): ReactNode {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/read" element={<Read/>}/>
      </Routes>
    </>
  );
}
