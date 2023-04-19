import { useState, useEffect, useRef, useMemo } from "react";

import Hero from "@comp/Hero.jsx";

import LocomotiveScroll from "locomotive-scroll";

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

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: appRef.current,
            smooth: true,
        });
    }, []);

    return (
        <div ref={appRef} className="App" data-scroll-container>
            <Hero />
        </div>
    );
}

export default App;
