import { useState, useRef } from "react";
import { Blurhash } from "react-blurhash";

function Image({ src, webp, hash, id, loaded = () => {}, alt = "" }) {
    const [imgLoaded, setImgLoaded] = useState(false);
    let images = useRef(null);

    return (
        <div className="image">
            <div
                className="blur"
                style={{
                    display: !imgLoaded ? "inline" : "none",
                }}
                aria-hidden={imgLoaded}
            >
                <Blurhash hash={hash} />
            </div>
            <picture>
                <source type="image/webp" srcSet={webp} loading="lazy" />
                <img
                    ref={images}
                    src={src}
                    onLoad={() => {
                        setImgLoaded(true);
                        loaded({ loaded: true, src: src });
                    }}
                    style={{
                        display: imgLoaded ? "block" : "none",
                    }}
                    alt={alt}
                    aria-label={alt}
                    id={id}
                    role="img"
                    loading="lazy"
                    decoding="async"
                />
            </picture>
        </div>
    );
}

export default Image;
