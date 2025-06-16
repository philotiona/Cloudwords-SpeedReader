import type { ReactNode } from "react";
import Header from "./components/Header/Header";
import Cloud from "./common/Svgs/Cloud";
import Button from "./common/Button/Button";

export default function App(): ReactNode {
  return(
    <div className="appWrapper">
        <Header/>
        <main className="main">
            <section className="hero">
                <div className="cloudWrapper">
                    <Cloud classname="cloud4"/>
                    <Cloud classname="cloud3"/>
                    <Cloud classname="cloud2"/>
                    <Cloud classname="cloud1"/>
                </div>
                <article className="article">
                  <div className="h1s">
                      <h1 className="firstHeading">World Float</h1>
                      <h1 className="secondHeading">Like Clouds</h1>
                  </div>
                  <p className="ptag">Find your reading rhythm. Just as clouds glide across the sky, words here flow naturally, inviting a peaceful and profound connection with every meaning they carry.</p>
                </article>
                <div className="heroButtons">
                    <Button type="button" text="Catch the Current" classname="catchCurrent"/>
                    
                </div>
            </section>
        </main>
    </div>
  )
}