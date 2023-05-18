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
function Hero({ heroStart }) {
    let [images, setImages] = useState(heroImages);
    let [imagesLoaded, setImagesLoaded] = useState([]);
    let hero = useRef(null);
    let tl = useRef();

    function allImageLoaded({ loaded, src }) {
        setImagesLoaded((prevImagesLoaded) => {
            return [...prevImagesLoaded, { loaded, src }];
        });
    }
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            tl.current = gsap.timeline();

            let galleryImage = document.querySelector(".gallery_image");

            let animateDuration = 1;
            let animateDelay = 1;

            if (heroStart) {
                console.log("state");
                // tl.current


            // gsap.to(".i7", {
            //     duration: animateDuration,
            //     delay: animateDelay,
            //     y: "100%",
            //     // onStart: () => {
            //     //     document.querySelector(".container").classList.add("fixed");
            //     //     document.body.classList.add("stop-scrolling");
            //     // },
            //     // onComplete: () => {
            //     //     document
            //     //         .querySelector(".container")
            //     //         .classList.remove("fixed");
            //     //     document.body.classList.remove("stop-scrolling");
            //     // },
            // });
            // if (
            //     images.length === imagesLoaded.length &&
            //     imagesLoaded.every((imageLoaded) => {
            //         return imageLoaded.loaded == true;
            //     })
            // ) {
            //     // heroLoad();
            }
        }, hero);
        return () => ctx.revert();
    }, []);

    return (
        <main className="hero" ref={hero} aria-busy={heroStart ? true : false}>
            <div className="container">

                    {/* {images.map((image) => {
                        return (
                            <div className="gallery_image" key={image.key}>
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
                    })} */}

            </div>
        </main>
    );
}

export default Hero;
