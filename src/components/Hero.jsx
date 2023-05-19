import {
    useRef,
    useEffect,
    useLayoutEffect,
    useState,
    Suspense,
    lazy,
} from "react";
import useImageLoaded from "../hooks/useImageLoaded.jsx";
import useGsap from "../hooks/useGsap.jsx";
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

function Hero({ setImageLoaded }) {
    let images = useRef(heroImages);
    let [isImageLoad, loadedFun] = useImageLoaded(heroImages, setImageLoaded);

    let hero = useRef(null);
    let tl = useRef();

    useGsap(() => {
        gsap.to(".gallery_image", {
            x: "100%",
        });
    }, hero);

    return (
        <main className="hero" ref={hero} aria-busy={true}>
            <div className="container">
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
        </main>
    );
}

export default Hero;
