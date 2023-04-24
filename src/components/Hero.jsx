import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "@ui/Image.jsx";
import { heroImages } from "../assets/images/img/imageDate.jsx";

gsap.registerPlugin(ScrollTrigger);
function Hero() {
    let [images, setImages] = useState(heroImages);
    let hero = useRef(null);
    let tl = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let direction = 10;
            let delay = 0.5;

            tl.current = gsap.timeline();
            gsap.to(".Gallery", {
                scrollTrigger: {
                    trigger: ".container",
                    // toggleActions: "play none reverse none",
                    start: "1px top",
                    // end: "bottom bottom",
                    markers: true,
                    // toggleClass: {
                    //     targets: "body",
                    //     className: "stop-scrolling",
                    // },
                },

                direction: "10s",
                scale: 0.5,
                y: "-2%",
                x: "-3%",
                onStart: () => {
                    console.log("start");
                    document.body.classList.add("start");
                },
                onComplete: () => {
                    console.log("end");
                    document.body.classList.add("end");
                },
            });
        }, hero);

        return () => ctx.revert();
    }, []);

    return (
        <main className="hero" ref={hero}>
            <div className="container stop-scrolling">
                <div className="Gallery">
                    <div className="row">
                        <div className="Gallery-image"></div>
                        <div className=" Gallery-image"></div>
                        <div className=" Gallery-image"></div>
                    </div>
                    <div className="row">
                        <div className="Gallery-image"></div>
                        <div className="main-image Gallery-image"></div>
                        <div className=" Gallery-image"></div>
                    </div>
                    <div className="row">
                        <div className="Gallery-image"></div>
                        <div className="Gallery-image"></div>
                        <div className="Gallery-image"></div>
                    </div>
                </div>
            </div>

            {/* // <Image
            //     src={images[0].src}
            //     webp={images[0].webp}
            //     alt={images[0].alt}
            //     hash={images[0].hash}
            //     id={images[0].id}
            //     key={images[0].key}
            // /> */}
        </main>
    );
}

export default Hero;
