import {
    useRef,
    useEffect,
    useLayoutEffect,
    useState,
    Suspense,
    lazy,
} from "react";
import useImageLoaded from "../hooks/useImageLoaded.jsx";
import useGsap from "../hooks/useGsap.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "@ui/Image.jsx";

/*
// todo: heroImages
// todo: allImageLoaded function
todo: hero animation
    todo: work when scroll
    
*/
gsap.registerPlugin(ScrollTrigger);

function Hero({}) {
    let hero = useRef(null);
    let tl = useRef();

    useGsap(() => {
        // gsap.to(".gallery_image", {
        //     x: "100%",
        // });
    }, hero);

    return (
        <main className="hero" ref={hero} aria-busy={true}>
            <div className="Container">
                <div className="blend">
                    <h1>Lorem ipsum dolor</h1>
                </div>
            </div>
        </main>
    );
}

export default Hero;
