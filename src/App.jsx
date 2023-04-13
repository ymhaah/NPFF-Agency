import { useState, useEffect, useRef } from "react";

import Hero from "@comp/Hero.jsx";

import LocomotiveScroll from "locomotive-scroll";
import FontFaceObserver from "fontfaceobserver";

const font1 = new FontFaceObserver("Mosk");
const font2 = new FontFaceObserver("Rachel");

font1.load().catch(() => {
    console.error(`${font1.family} failed to load.`);
});
font2.load().catch(() => {
    console.error(`${font2.family} failed to load.`);
});

console.log(`Made with 💙 by Youssef Hafnawy: https://twitter.com/hafanwi`);
// console.warn("the min dimensions is 4");
/*

todo: 

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
    }, [appRef]);

    return (
        <>
            <a
                href=""
                className="visually-hidden"
                title="click Enter to skip navigation menu"
            >
                skip to the content
            </a>
            <div ref={appRef} className="App" data-scroll-container>
                <Hero />
            </div>
        </>
    );
}

export default App;
