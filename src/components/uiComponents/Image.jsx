import { useState, useRef } from "react";
import { Blurhash } from "react-blurhash";

function Image({ src, webp, hash, id, loaded, alt = "" }) {
    const [imgLoaded, setImgLoaded] = useState(false);
    let image = useRef(null);

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
                <source type="image/webp" srcSet={webp} />
                <img
                    ref={image}
                    src={src}
                    onLoad={() => {
                        setImgLoaded(true);
                        loaded(true);
                    }}
                    style={{
                        display: imgLoaded ? "block" : "none",
                    }}
                    alt={alt}
                    aria-label={alt}
                    id={id}
                    role="img"
                />
            </picture>
        </div>
    );
}

export default Image;
