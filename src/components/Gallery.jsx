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
        <section className="gallery" ref={gallery} id="gallery">
            <div className="grid">
                <div className="coll">
                    <div className="gallery-image image-s">
                        <Image
                            loaded={loadedFun}
                            src={mainImages[0].src}
                            webp={mainImages[0].webp}
                            alt={mainImages[0].alt}
                            hash={mainImages[0].hash}
                            id={mainImages[0].id}
                        />
                    </div>
                    <div className="gallery-image image-m">
                        <Image
                            loaded={loadedFun}
                            src={mainImages[1].src}
                            webp={mainImages[1].webp}
                            alt={mainImages[1].alt}
                            hash={mainImages[1].hash}
                            id={mainImages[1].id}
                        />
                    </div>
                    <div className="gallery-image image-l">
                        <Image
                            loaded={loadedFun}
                            src={mainImages[2].src}
                            webp={mainImages[2].webp}
                            alt={mainImages[2].alt}
                            hash={mainImages[2].hash}
                            id={mainImages[2].id}
                        />
                    </div>
                </div>
                <div className="coll">
                    <div className="gallery-image image-m">
                        <Image
                            loaded={loadedFun}
                            src={mainImages[3].src}
                            webp={mainImages[3].webp}
                            alt={mainImages[3].alt}
                            hash={mainImages[3].hash}
                            id={mainImages[3].id}
                        />
                    </div>
                    <div className="gallery-image image-xl">
                        <Image
                            loaded={loadedFun}
                            src={mainImages[4].src}
                            webp={mainImages[4].webp}
                            alt={mainImages[4].alt}
                            hash={mainImages[4].hash}
                            id={mainImages[4].id}
                        />
                    </div>
                    <div className="gallery-image image-l">
                        {/* <Image
                            loaded={loadedFun}
                            src={mainImages[5].src}
                            webp={mainImages[5].webp}
                            alt={mainImages[5].alt}
                            hash={mainImages[5].hash}
                            id={mainImages[5].id}
                        /> */}
                    </div>
                </div>
                <div className="coll">
                    <div className="gallery-image image-s">
                        {/* <Image
                            loaded={loadedFun}
                            src={mainImages[0].src}
                            webp={mainImages[0].webp}
                            alt={mainImages[0].alt}
                            hash={mainImages[0].hash}
                            id={mainImages[0].id}
                        /> */}
                    </div>
                    <div className="gallery-image image-xl">
                        {/* <Image
                            loaded={loadedFun}
                            src={mainImages[0].src}
                            webp={mainImages[0].webp}
                            alt={mainImages[0].alt}
                            hash={mainImages[0].hash}
                            id={mainImages[0].id}
                        /> */}
                    </div>
                    <div className="gallery-image image-s">
                        {/* <Image
                            loaded={loadedFun}
                            src={mainImages[0].src}
                            webp={mainImages[0].webp}
                            alt={mainImages[0].alt}
                            hash={mainImages[0].hash}
                            id={mainImages[0].id}
                        /> */}
                    </div>
                </div>
            </div>

            {/* {images.current.map((image) => {
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
            })} */}
        </section>
    );
}

export default Gallery;
