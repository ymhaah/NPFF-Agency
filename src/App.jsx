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

import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsap from "./hooks/useGsap";

import Loader from "@comp/Loader.jsx";
import Hero from "@comp/Hero.jsx";
import Gallery from "@comp/Gallery";

console.log(`Made with 💙 by Youssef Hafnawy: https://twitter.com/hafanwi`);
// console.warn("the min dimensions is 4");
/*

// todo: font
// todo: image
    // todo: plurHash
    // todo: image opt
todo: hero
    // todo: hero images


*/

// Gsap var
// let duration = 0.5;
// let delay = 0.1;
// let allTime = (duration + delay + 0.1) * 1000;

gsap.registerPlugin(ScrollTrigger);

function App() {
    const lenisConfig = useLenis(({ scroll }) => {
        ScrollTrigger.update();
    });

    let app = useRef(null);
    let [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (imageLoaded) {
            document.body.classList.remove("no-scroll");
        }
    }, [imageLoaded]);

    useGsap(() => {
        let animationDelay = 1.5;
        if (imageLoaded) {
            gsap.from(".GA-pop", {
                scrollTrigger: ".GA-pop",
                delay: animationDelay,
                stagger: 0.1,
                opacity: 0,
                y: "50%",
                rotation: "5deg",
            });
        }
    }, app);

    return (
        <ReactLenis
            root
            options={{
                duration: 1.2,
            }}
        >
            <div ref={app} className="App ">
                {!imageLoaded && <Loader />}
                <Hero />
                <Gallery setImageLoaded={setImageLoaded} />
                <div className="work"></div>
            </div>
        </ReactLenis>
    );
}

export default App;
