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
            let galleryImageProps = galleryImage.getBoundingClientRect();
            let galleryImageHight = galleryImageProps.height + 16;
            let galleryImageWidth = galleryImageProps.width + 16;

            let animateDuration = 1;
            let animateDelay = 1;
            // tl.current
            //     .to(".c1", {
            //         duration: animateDuration,
            //         delay: animateDelay,
            //         y: galleryImageHight,
            //     })
            //     .to(".c2", {
            //         duration: animateDuration,
            //         delay: animateDelay,
            //         y: -galleryImageHight,
            //     });
            // .to(".r1", {
            //     duration: animateDuration,
            //     delay: animateDelay,
            //     x: galleryImageWidth,
            // })
            // .to(".r2", {
            //     duration: animateDuration,
            //     delay: animateDelay,
            //     x: galleryImageWidth,
            // });

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
                    <div className="gallery-grid">
                        <div className="gallery_image i1 c1"></div>
                        <div className="gallery_image i2 "></div>
                        <div className="gallery_image i3 c2"></div>
                        <div className="gallery_image i4 c1"></div>
                        <div className="gallery_image i5"></div>
                        <div className="gallery_image i6 c2"></div>
                        <div className="gallery_image i7 c1"></div>
                        <div className="gallery_image i8"></div>
                        <div className="gallery_image i9 c2"></div>
                    </div>

                    <div className="gallery_image i10 c1"></div>
                    <div className="gallery_image i11 "></div>
                    <div className="gallery_image i12"></div>
                    <div className="gallery_image i13 c2"></div>

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
