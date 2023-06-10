import { useRef, useState } from "react";
import useImageLoaded from "../hooks/useImageLoaded.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useGsap from "../hooks/useGsap.jsx";
import Image from "@ui/Image.jsx";
import { mainImages } from "../assets/images/img/imageDate.jsx";

gsap.registerPlugin(ScrollTrigger);

function Gallery({ setImageLoaded }) {
    let gallery = useRef();
    let [isImageLoad, loadedFun] = useImageLoaded(
        mainImages,
        setImageLoaded,
        1
    );

    useGsap(() => {
        gsap.to(".GA-to-light", {
            scrollTrigger: {
                trigger: ".GA-to-light",
                toggleActions: "play complete restart reverse",
                start: "top 75%",
            },
            direction: 0.2,
            delay: 0.1,
            backgroundColor: "#f9fafb",
        });
        gsap.to(".GA-slider-left", {
            scrollTrigger: {
                trigger: ".grid",
                scrub: true,
                // start: "top 75%",
            },
            xPercent: 50,
        });
    }, [gallery]);

    return (
        <section className="gallery" ref={gallery} id="gallery">
            <Image
                loaded={loadedFun}
                src={mainImages[0].src}
                webp={mainImages[0].webp}
                alt={mainImages[0].alt}
                hash={mainImages[0].hash}
                id={mainImages[0].id}
                className="mainImg"
            />
            <div className="h-stop GA-to-light"></div>
            <div className="gallery-images">
                <div className="grid GA-slider-left">
                    <Image
                        loaded={loadedFun}
                        src={mainImages[1].src}
                        webp={mainImages[1].webp}
                        alt={mainImages[1].alt}
                        hash={mainImages[1].hash}
                        id={mainImages[1].id}
                    />
                    <Image
                        loaded={loadedFun}
                        src={mainImages[2].src}
                        webp={mainImages[2].webp}
                        alt={mainImages[2].alt}
                        hash={mainImages[2].hash}
                        id={mainImages[2].id}
                    />
                    <Image
                        loaded={loadedFun}
                        src={mainImages[3].src}
                        webp={mainImages[3].webp}
                        alt={mainImages[3].alt}
                        hash={mainImages[3].hash}
                        id={mainImages[3].id}
                    />
                    <Image
                        loaded={loadedFun}
                        src={mainImages[4].src}
                        webp={mainImages[4].webp}
                        alt={mainImages[4].alt}
                        hash={mainImages[4].hash}
                        id={mainImages[4].id}
                    />
                </div>
            </div>
        </section>
    );
}

export default Gallery;
