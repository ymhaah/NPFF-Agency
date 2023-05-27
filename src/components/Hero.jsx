import {
    useRef,
    useEffect,
    useLayoutEffect,
    useState,
    Suspense,
    lazy,
} from "react";
import useGsap from "../hooks/useGsap.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "@ui/Image.jsx";
import logo from "../assets/images/svg/logo.svg";
import compass from "../assets/images/svg/compass.svg";
import human from "../assets/images/svg/human.svg";

/*
// todo: allImageLoaded function
// todo: hero animation
//     todo: work when scroll
//         todo: main text
//         todo: the compass
todo: the button comp with hot tost
*/
gsap.registerPlugin(ScrollTrigger);

function Hero({}) {
    let hero = useRef(null);
    let tl = useRef();

    useGsap(() => {
        gsap.to(".GA-text-to-left", {
            scrollTrigger: {
                scrub: true,
                end: "+=150%",
                // endTrigger: ""
            },
            x: "75%",
        });
        gsap.to(".GA-text-to-right", {
            scrollTrigger: {
                scrub: true,
                end: "+=150%",
            },
            x: "-25%",
        });
        gsap.to(".GA-scroll-spinning", {
            scrollTrigger: {
                scrub: true,
                end: "+=150%",
            },
            rotation: 360,
        });
    }, hero);

    return (
        <main className="hero" ref={hero} aria-busy={true}>
            <div className="Container">
                <header className="GA-scroll-spinning">
                    <div className="logo">
                        <a href="/index.html">
                            <Image src={logo} />
                            <span className="visually-hidden">
                                the website logo
                            </span>
                        </a>
                    </div>
                </header>
                <h1>
                    <span className="GA-text-to-left">
                        Human
                        <Image src={human} />
                    </span>
                    <span className="GA-text-to-right">centred</span>
                    <span className="GA-text-to-left">designs</span>
                </h1>
                <footer>
                    <div className="explore GA-scroll-spinning">
                        <Image src={compass} />
                    </div>
                </footer>
            </div>
        </main>
    );
}

export default Hero;
