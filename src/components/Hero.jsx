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
            // let gallery = document.querySelector(".Gallery");
            // let container = document.querySelector(".container");
            // let containerProps = container.getBoundingClientRect();
            // let galleryProps = gallery.getBoundingClientRect();
            // let hight = containerProps.height / 2 - galleryProps.height / 2;
            // gallery.style.setProperty("--gallery-hight", hight + "px");

            let animateDuration = 1;
            // let delay = 1 + heroDelay / 1000;
            let animateDelay = 1;
            // gsap.to(".Gallery", {
            //     duration: animateDuration,
            //     delay: animateDelay,
            //     scale: 0.5,
            //     y: "-3%",
            //     x: "-1%",
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
            // }
        }, hero);
        return () => ctx.revert();
    }, [images.length === imagesLoaded.length]);

    return (
        <main className="hero" ref={hero}>
            <div className="container">
                <div className="Gallery"></div>
            </div>

            {/* <div className="container">
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
            </div> */}
        </main>
    );
}

export default Hero;
