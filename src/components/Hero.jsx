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

            tl.current
                .to(".c1", {
                    duration: 1,
                    delay: animateDelay,
                    y: "10%",
                })
                .to(
                    ".c1 .gallery_image",
                    {
                        duration: 0.5,
                        // delay: animateDelay,
                        // stagger: 0.2,
                        scale: 0.85,
                    },
                    "<"
                )
                .to(".c1 .gallery_image", {
                    duration: 0.5,
                    // stagger: 0.2,
                    scale: 1,
                });

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
            // }
        }, hero);
        return () => ctx.revert();
    }, []);

    return (
        <main className="hero" ref={hero}>
            <div className="container">
                <div className="gallery">
                    <div className="c1 coll">
                        <div className="gallery_image image-s"></div>
                        <div className="gallery_image image-xl"></div>
                        <div className="gallery_image image-l"></div>
                        <div className="gallery_image image-xl"></div>
                        <div className="gallery_image image-m"></div>
                        <div className="gallery_image image-s"></div>
                        <div className="gallery_image image-l"></div>
                        <div className="gallery_image image-s"></div>
                    </div>
                    <div className="c2 coll">
                        <div className="gallery_image image-m"></div>
                        <div className="gallery_image image-m"></div>
                        <div className="gallery_image image-l"></div>
                        <div className="gallery_image image-s"></div>
                        <div className="gallery_image image-xl"></div>
                        <div className="gallery_image image-s"></div>
                        <div className="gallery_image image-m"></div>
                        <div className="gallery_image image-l"></div>
                    </div>
                    <div className="c3 coll">
                        <div className="gallery_image image-xl"></div>
                        <div className="gallery_image image-m"></div>
                        <div className="gallery_image image-s"></div>
                        <div className="gallery_image image-xl"></div>
                        <div className="gallery_image image-m"></div>
                        <div className="gallery_image image-l"></div>
                        <div className="gallery_image image-xl"></div>
                        <div className="gallery_image image-s"></div>
                    </div>
                    <div className="c4 coll">
                        <div className="gallery_image image-m"></div>
                        <div className="gallery_image"></div>
                        <div className="gallery_image image-m"></div>
                        <div className="gallery_image image-l"></div>
                        <div className="gallery_image"></div>
                        <div className="gallery_image image-m"></div>
                        <div className="gallery_image image-l"></div>
                        <div className="gallery_image image-m"></div>
                    </div>

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
            </div>
        </main>
    );
}

export default Hero;
