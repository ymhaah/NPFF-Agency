import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "@ui/Image.jsx";
import { heroImages } from "../assets/images/img/imageDate.jsx";

/*
// todo: heroImages
// todo: allImageLoaded function
todo: hero animation
    todo: work when scroll
    
*/

gsap.registerPlugin(ScrollTrigger);
function Hero({ heroLoad, heroDelay }) {
    let [images, setImages] = useState(heroImages);
    let [imagesLoaded, setImagesLoaded] = useState([]);
    let hero = useRef(null);

    function allImageLoaded({ loaded, src }) {
        setImagesLoaded((prevImagesLoaded) => {
            return [...prevImagesLoaded, { loaded, src }];
        });
    }
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let duration = 1;
            let delay = 1 + heroDelay / 1000;

            if (
                images.length === imagesLoaded.length &&
                imagesLoaded.every((imageLoaded) => {
                    return imageLoaded.loaded == true;
                })
            ) {
                heroLoad();
                // gsap.to(".Gallery", {
                //     duration: duration,
                //     delay: delay,
                //     scale: 0.4,
                //     y: "-2%",
                //     x: "-3%",
                //     onStart: () => {
                //         document
                //             .querySelector(".container")
                //             .classList.add("fixed");
                //         document.body.classList.add("stop-scrolling");
                //     },
                //     onComplete: () => {
                //         document
                //             .querySelector(".container")
                //             .classList.remove("fixed");
                //         document.body.classList.remove("stop-scrolling");
                //     },
                // });
            }
        }, hero);
        return () => ctx.revert();
    }, [images.length === imagesLoaded.length]);

    return (
        <main className="hero" ref={hero}>
            <div className="container">
                <div className="Gallery">
                    {images.map((image) => {
                        return (
                            <div className="Gallery-image" key={image.key}>
                                <Image
                                    loaded={allImageLoaded}
                                    src={image.src}
                                    webp={image.webp}
                                    alt={image.alt}
                                    hash={image.hash}
                                    id={image.id}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

export default Hero;
