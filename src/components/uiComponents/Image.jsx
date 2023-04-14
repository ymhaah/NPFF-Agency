import { useState, useEffect, useRef } from "react";

import { Blurhash } from "react-blurhash";

function Image({ src, alt, hash }) {
    const [imgLoaded, setImgLoaded] = useState(false);

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

            <img
                src={src}
                alt={alt}
                onLoad={() => {
                    setImgLoaded(true);
                }}
                style={{
                    display: imgLoaded ? "block" : "none",
                }}
                loading="lazy"
            />
        </div>
    );
}

export default Image;
