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
        gsap.to(".GA-text-to-left", {
            scrollTrigger: {
                scrub: true,
                end: "50%",
            },
            x: "50%",
        });
        gsap.to(".GA-text-to-right", {
            scrollTrigger: {
                scrub: true,
                end: "50%",
            },
            x: "-50%",
        });
    }, hero);

    return (
        <main className="hero" ref={hero} aria-busy={true}>
            <div className="Container">
                <h1>
                    <span className="GA-text-to-left GA-pop">Human</span>
                    <span className="GA-text-to-right GA-pop">centred</span>
                    <span className="GA-text-to-left GA-pop">designs</span>
                </h1>
            </div>
        </main>
    );
}

export default Hero;
