import { useState, useEffect, useRef } from "react";

import { Blurhash } from "react-blurhash";

/*
// todo: add blurhash
todo: make a json file that Contains different images type (WebP, jpg)
todo: Make all images have more than one size (phone, tablet, laptop, Monitor)
todo: use img srcset and make it work automatically with the json file 
todo: use the picture element and make it work automatically with the json file 
*/

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
            {/* <img src="img/cat-500.jpg"
srcset="img/cat-500.jpg 500w,
img/cat-1000.jpg 1000w,
img/cat-1500.jpg 1500w"
sizes="(min-width: 760px) calc(50vw 2em), 100vw"
alt=""></img> */}
        </div>
    );
}

export default Image;
