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
import Loader from "./Loader.jsx";
import Image from "@ui/Image.jsx";
import logo from "../assets/images/svg/logo.svg";
import compass from "../assets/images/svg/compass.svg";

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
                <header>
                    <div className="logo">
                        <a href="index.html">
                            <Image src={logo} />
                            <span className="visually-hidden">logo</span>
                        </a>
                    </div>
                    <button>click me!</button>
                </header>
                <h1>
                    <span className="GA-text-to-left GA-pop">Human</span>
                    <span className="GA-text-to-right GA-pop">centred</span>
                    <span className="GA-text-to-left GA-pop">designs</span>
                </h1>
                <footer>
                    <div className="explore GA-scroll-spinning">
                        <a href="#">
                            <Image src={compass} />
                            <span className="visually-hidden">explore</span>
                        </a>
                    </div>
                </footer>
            </div>
        </main>
    );
}

export default Hero;
