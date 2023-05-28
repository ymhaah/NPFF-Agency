import {
    useState,
    useEffect,
    useLayoutEffect,
    useRef,
    useMemo,
    useContext,
    createContext,
    Suspense,
} from "react";

import Lenis from "@studio-freight/lenis";
import noise from "./assets/images/svg/noise.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsap from "./hooks/useGsap";
import useMousePosition from "./hooks/useMousePosition";
import { Toaster } from "react-hot-toast";
import Loader from "@comp/Loader.jsx";
import Hero from "@comp/Hero.jsx";
import Gallery from "@comp/Gallery";

console.log(`Made with 💙 by Youssef Hafnawy: https://twitter.com/hafanwi`);
// console.warn("the min dimensions is 4");
/*

// todo: font
// todo: image
// todo: scrolling
    // todo: plurHash
    // todo: image opt
// todo: hero
    // todo: header
    // todo: hot tost
todo: Gallery

*/

// Gsap var
// let duration = 0.5;
// let delay = 0.1;
// let allTime = (duration + delay + 0.1) * 1000;

const lenis = new Lenis({
    duration: 3,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

function App() {
    let app = useRef(null);
    let [imageLoaded, setImageLoaded] = useState(false);

    let cursorFollower = useRef(null);

    useEffect(() => {
        if (imageLoaded) {
            document.body.classList.remove("no-scroll");
        }
    }, [imageLoaded]);

    let mousePos = useMousePosition((x, y) => {
        gsap.to(cursorFollower.current, {
            scale: 50,
            x: x,
            y: y,
        });
    });

    useGsap(() => {
        // gsap.from(".GA-pop", {
        //     scrollTrigger: {
        //         trigger: ".GA-pop",
        //     },
        //     stagger: 0.1,
        //     opacity: 0,
        //     y: "50%",
        //     rotation: "5deg",
        // });
    }, app);

    return (
        <div ref={app} className="App ">
            <Toaster position="top-center" />
            {!imageLoaded && <Loader />}

            <span className="cursor-follower" ref={cursorFollower}></span>
            <div
                className="noise"
                style={{ backgroundImage: `url(${noise})` }}
            ></div>
            <Hero />
            <Gallery setImageLoaded={setImageLoaded} />
        </div>
    );
}

export default App;
