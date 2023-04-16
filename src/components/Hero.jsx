import { useId, useMemo } from "react";
import Image from "@ui/Image.jsx";

// todo: fix the image import pug

function Hero({ imgData }) {
    let imageId = useId();

    return (
        <main className="hero">
            <button>test</button>
            {imgData.map((image) => {
                return (
                    <Image
                        src={image.src}
                        alt={image.alt}
                        hash={image.hash}
                        key={imageId}
                    />
                );
            })}
        </main>
    );
}

export default Hero;
