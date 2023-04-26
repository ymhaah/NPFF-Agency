import { useState, useEffect, useRef, useMemo } from "react";

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
    let [heroLoaded, setHeroLoaded] = useState(false);
    let heroDelay = 1000;

    function heroLoad() {
        setTimeout(() => {
            setHeroLoaded(true);
        }, heroDelay);
    }
    return (
        <div ref={appRef} className="App">
            <div
                className="Loading"
                style={{
                    display: !heroLoaded ? "block" : "none",
                }}
                aria-label={
                    !heroLoaded ? "website is loading" : "website loaded"
                }
                aria-hidden={heroLoaded}
            ></div>
            <Hero heroLoad={heroLoad} heroDelay={heroDelay} />

            <div className="work"></div>
        </div>
    );
}

export default App;
