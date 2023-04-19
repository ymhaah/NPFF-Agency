import { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Image from "@ui/Image.jsx";
import { heroImages } from "../assets/images/img/imageDate.jsx";

function Hero() {
    let animatedBlock = useRef(null);

    useLayoutEffect(() => {
        gsap.to(animatedBlock.current, {
            x: "100%",
        });
    }, []);

    return (
        <main className="hero">
            <div className="block top">
                <div className="Container">
                    <h1 className="visually-hidden">
                        nice project for freelance
                    </h1>
                    <h2>test</h2>
                    <span className="sup-text">Lorem ipsum dolor.</span>
                </div>
                <div className="animated-block" ref={animatedBlock}></div>
            </div>
            {/* <div className="block middle-top">
                <div className="Container">
                    <h2>test</h2>
                    <span c></span>
                </div>
                <div className="animated-block"></div>
            </div>
            <div className="block middle-bottom">
                <div className="Container">
                    <h2>test</h2>
                </div>
                <div className="animated-block "></div>
            </div>
            <div className="block bottom">
                <div className="Container">
                    <h2>test</h2>
                </div>
                <div className="animated-block "></div>
            </div> */}
            {/* <div className="Container"></div> */}

            {/* {heroImages.map((image) => {
                return (
                    <Image
                        src={image.src}
                        webp={image.webp}
                        alt={image.alt}
                        hash={image.hash}
                        id={image.id}
                        key={image.key}
                    />
                );
            })} */}
        </main>
    );
}

export default Hero;
