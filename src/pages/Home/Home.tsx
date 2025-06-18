import type { ReactNode } from "react";
import Hero from "../../components/Hero/Hero";
import Discover from "../../components/Discover/Discover";
import Demo from "../../components/Demo/Demo";

export default function Home(): ReactNode {
    return(
        <main className="main">
            <Hero/>
            <Discover/>
            <Demo />
      </main>
    )
}