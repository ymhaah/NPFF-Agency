import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsap from "../hooks/useGsap.jsx";
import Image from "@ui/Image.jsx";
import logo from "../assets/images/svg/logo.svg";
import compass from "../assets/images/svg/compass.svg";
import human from "../assets/images/svg/human.svg";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    let hero = useRef(null);
    useGsap(() => {
        gsap.to(".GA-text-to-left", {
            scrollTrigger: {
                scrub: true,
                end: "+=150%",
                // endTrigger: ""
            },
            x: "60%",
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
                    <span className="GA-text-to-left">design</span>
                </h1>
                <footer>
                    <div
                        className="explore GA-scroll-spinning"
                        onClick={() => {
                            import("react-hot-toast")
                                .then((module) => {
                                    return { default: module.toast };
                                })
                                .then((module) => {
                                    let toast = module.default;
                                    toast.error(
                                        "This website still under development"
                                    );
                                });
                        }}
                    >
                        <Image src={compass} />
                    </div>
                </footer>
            </div>
        </main>
    );
}

export default Hero;
