import { useState, useEffect } from "react";

import Button from "@ui/Button.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import setSpecialThings from "./utils/setSpecialThingsFun.js";
import randomNum from "./utils/randomNum.js";
import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
});

console.log(`Made with 💙 by Youssef Hafnawy`);
// console.warn("the min dimensions is 4");
/*

todo: 

*/

// Gsap var
// let duration = 0.5;
// let delay = 0.1;
// let allTime = (duration + delay + 0.1) * 1000;

function App() {
    // const [app, setApp] = useState();
    // setApp((prevApp) => {
    //     return;
    // });
    // useEffect(() => {}, []);

    // const [width, setWidth] = useState();
    // useEffect(() => {
    //     if (!CSS.supports("aspect-ratio: 1 / 1")) {
    //         let item = document.querySelector("");
    //         setWidth(item.offsetWidth);
    //         window.onresize = () => {
    //             setWidth(item.offsetWidth);
    //             item.style.height = width;
    //         };
    //     }
    // }, [window.innerWidth]);

    return (
        <div className="App">
            <Button content="test" />
        </div>
    );
}

export default App;
