import type { ReactNode } from "react";
import Header from "./components/Header/Header";
import Demo from "./components/Demo/Demo";
import Hero from "./components/Hero/Hero";
import Discover from "./components/Discover/Discover";

export default function App(): ReactNode {
  return (
    <div className="appWrapper">
      <Header />
      <main className="main">
        <Hero/>
        <Discover/>
        <Demo />
      </main>
    </div>
  );
}
