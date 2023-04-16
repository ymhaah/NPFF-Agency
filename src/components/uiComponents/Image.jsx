import { useState } from "react";
import { Blurhash } from "react-blurhash";

/*
// todo: add blurhash
// todo: make a json file that Contains different images type (WebP, jpg)
// todo: Make all images have more than one size (phone, tablet, laptop, Monitor)
// todo: use img srcset and make it work automatically with the json file 
// todo: use the picture element and make it work automatically with the json file 
*/

function Image({ alt = "Image from the artist's gallery", src, hash }) {
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
            <picture>
                <source type="image/webp" srcSet={src.webp} />
                <img
                    srcSet={src.jpg}
                    src={src.main}
                    onLoad={() => {
                        setImgLoaded(true);
                    }}
                    style={{
                        display: imgLoaded ? "block" : "none",
                    }}
                    alt={alt}
                    decoding="async"
                />
            </picture>
        </div>
    );
}

export default Image;
