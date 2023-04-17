import { useId, useMemo } from "react";
import Image from "@ui/Image.jsx";
import { heroImages } from "../assets/images/img/imageDate.jsx";

function Hero() {
    return (
        <main className="hero">
            <button>test</button>
            {heroImages.map((image) => {
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
            })}
        </main>
    );
}

export default Hero;
