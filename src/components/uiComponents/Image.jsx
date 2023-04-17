import { useState, useRef } from "react";
import { Blurhash } from "react-blurhash";

function Image({
    src,
    webp,
    hash,
    id,
    alt = "Image from the artist's gallery",
}) {
    const [imgLoaded, setImgLoaded] = useState(false);
    let images = useRef(null);

    return (
        <div className="image">
            <div
                className="blur"
                style={{
                    display: !imgLoaded ? "inline" : "none",
                }}
            >
                <Blurhash hash={hash} />
            </div>
            <picture>
                <source type="image/webp" srcSet={webp} />
                <img
                    ref={images}
                    src={src}
                    onLoad={() => {
                        setImgLoaded(true);
                    }}
                    style={{
                        display: imgLoaded ? "block" : "none",
                    }}
                    alt={alt}
                    id={id}
                    decoding="async"
                />
            </picture>
        </div>
    );
}

export default Image;
