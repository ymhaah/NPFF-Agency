import {
    useState,
    useEffect,
    useRef,
    useMemo,
    useContext,
    createContext,
} from "react";
import Loader from "@comp/Loader.jsx";
import Hero from "@comp/Hero.jsx";

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

function App() {
    let appRef = useRef(null);
    let [heroLoaded, setHeroLoaded] = useState({
        c1: true,
        c2: true,
        c3: true,
        c4: true,
    });
    let [heroStart, setHeroStart] = useState(false);

    return (
        <div ref={appRef} className="App">
            <Loader
                loadingState={heroLoaded}
                setHeroStart={setHeroStart}
                heroStart={heroStart}
            />
            <Hero heroStart={heroStart} />

            <div className="work"></div>
        </div>
    );
}

export default App;
