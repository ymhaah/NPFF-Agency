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
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

//

function App() {
    const lenisConfig = useLenis(({ scroll }) => {
        ScrollTrigger.update();
    });

    let appRef = useRef(null);
    let [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (imageLoaded) {
            document.body.classList.remove("no-scroll");
        }
    }, [imageLoaded]);

    return (
        <ReactLenis
            root
            options={{
                duration: 1.2,
            }}
        >
            <div ref={appRef} className="App">
                {!imageLoaded && <Loader />}
                <Hero />
                <div className="work"></div>
                <Gallery setImageLoaded={setImageLoaded} />
            </div>
        </ReactLenis>
    );
}

export default App;
