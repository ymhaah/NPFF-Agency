import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useImageLoaded from "../hooks/useImageLoaded.jsx";
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
        gsap.to(".gallery-grid .image", {
            scrollTrigger: {
                trigger: ".gallery-grid",
                scrub: true,
                start: "top 75%",
            },
            yPercent: -200,
        });
        gsap.to(".h-stop", {
            scrollTrigger: {
                trigger: ".h-stop",
                start: "top center",
                toggleActions: "play complete restart reverse",
            },
            onComplete: () => {
                import("react-hot-toast")
                    .then((module) => {
                        return { default: module.toast };
                    })
                    .then((module) => {
                        let toast = module.default;
                        toast.error("This website still under development");
                    });
            },
        });
    }, [gallery]);

    return (
        <section className="gallery" ref={gallery} id="gallery">
            <div className="gallery-grid GA-to-light">
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
                <Image
                    loaded={loadedFun}
                    src={mainImages[0].src}
                    webp={mainImages[0].webp}
                    alt={mainImages[0].alt}
                    hash={mainImages[0].hash}
                    id={mainImages[0].id}
                />
            </div>
            <div className="h-stop"></div>
        </section>
    );
}

export default Gallery;
