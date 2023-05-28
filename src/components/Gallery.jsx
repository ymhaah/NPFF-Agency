import { useRef, useState } from "react";
import useImageLoaded from "../hooks/useImageLoaded.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useGsap from "../hooks/useGsap.jsx";
import Image from "@ui/Image.jsx";
import { heroImages } from "../assets/images/img/imageDate.jsx";

gsap.registerPlugin(ScrollTrigger);

function Gallery({ setImageLoaded }) {
    let gallery = useRef();
    let images = useRef(heroImages);
    let [isImageLoad, loadedFun] = useImageLoaded(
        heroImages,
        setImageLoaded,
        1
    );

    // useGsap(() => {
    //     gsap.to(".gallery_image", {
    //         scrollTrigger: {
    //             trigger: ".gallery_image",
    //             scrub: true,
    //         },
    //         x: 200,
    //     });
    // }, [gallery]);

    return (
        <div className="gallery" ref={gallery} id="gallery">
            {images.current.map((image) => {
                return (
                    <div className="gallery_image" key={image.key}>
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
            })}
        </div>
    );
}

export default Gallery;
