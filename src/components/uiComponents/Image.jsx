import { useState, useEffect, useRef } from "react";

import { Blurhash } from "react-blurhash";

function Image({ src, alt, hash }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    const imageContainer = useRef(null);
    // let imageContainerWidth = null;
    // let imageContainerHight = null;

    // let test = 200;

    // console.log(test.substring(0, test.length - 2));

    useEffect(() => {
        // imageContainerWidth = getComputedStyle(imageContainer.current).width;
        // imageContainerWidth = Math.floor(
        //     imageContainerWidth.substring(0, imageContainerWidth.length - 2)
        // );
        // imageContainerHight = getComputedStyle(imageContainer.current).height;
        // imageContainerHight = Math.floor(
        //     imageContainerHight.substring(0, imageContainerHight.length - 2)
        // );
        // console.log(imageContainerHight);
    }, []);

    return (
        <div className="image" ref={imageContainer}>
            <div
                className="blur"
                style={{
                    display: !imgLoaded ? "inline" : "none",
                }}
            >
                <Blurhash
                    hash={hash}
                    // width={100}
                    // height={100}
                    // resolutionX={32}
                    // resolutionY={32}
                    // punch={1}
                />
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
