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
        gsap.from(".GA-c1", {
            scrollTrigger: {
                trigger: ".grid",
                scrub: true,
            },
            y: -200,
        });
        gsap.from(".GA-c2", {
            scrollTrigger: {
                trigger: ".grid",
                scrub: true,
            },
            y: -400,
        });
        gsap.from(".GA-c3", {
            scrollTrigger: {
                trigger: ".grid",
                scrub: true,
            },
            y: -500,
        });
        gsap.from(".GA-c4", {
            scrollTrigger: {
                trigger: ".grid",
                scrub: true,
            },
            y: -300,
        });
    }, [gallery]);

    return (
        <section className="gallery" ref={gallery} id="gallery">
            <div className="grid">
                <div className="coll GA-c1">
                    <div className="gallery-image"></div>
                    <div className="gallery-image"></div>
                    <div className="gallery-image"></div>
                </div>
                <div className="coll GA-c2">
                    <div className="gallery-image"></div>
                    <div className="gallery-image"></div>
                    <div className="gallery-image"></div>
                </div>
                <div className="coll GA-c3">
                    <div className="gallery-image"></div>
                    <div className="gallery-image"></div>
                    <div className="gallery-image"></div>
                </div>
                <div className="coll GA-c4">
                    <div className="gallery-image"></div>
                    <div className="gallery-image"></div>
                    <div className="gallery-image"></div>
                </div>

                {/* {mainImages.map((image) => {
                    return (
                        <div className="gallery-image" key={image.key}>
                            <Image
                                loaded={loadedFun}
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
        </section>
    );
}

export default Gallery;
