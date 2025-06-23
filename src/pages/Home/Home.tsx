import type { ReactNode } from "react";
import Hero from "../../components/Hero/Hero";
import Discover from "../../components/Discover/Discover";
import Demo from "../../components/Demo/Demo";
import { useDispatch } from "react-redux";
import type { AppDispatch} from "../../store/store";
import { setText } from "../../store/ReadingPageSlice";


export default function Home(): ReactNode {
    const dispatch = useDispatch<AppDispatch>();
    const onSubmit = (inputText: string) => {
        dispatch(setText(inputText));
    };

    return(
        <main className="main">
            <Hero/>
            <Discover/>
            <Demo onSubmit={onSubmit}/>
      </main>
    )
}