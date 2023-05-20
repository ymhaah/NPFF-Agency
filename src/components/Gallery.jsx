import { useRef, useState } from "react";
import useImageLoaded from "../hooks/useImageLoaded.jsx";

import Image from "@ui/Image.jsx";
import { heroImages } from "../assets/images/img/imageDate.jsx";

function Gallery({ setImageLoaded }) {
    let images = useRef(heroImages);
    let [isImageLoad, loadedFun] = useImageLoaded(
        heroImages,
        setImageLoaded,
        1
    );

    return (
        <div>
            {images.current.map((image) => {
                return (
                    <div className="gallery_image" key={image.key}>
                        <Image
                            loaded={loadedFun}
                            src={image.src}
                            webp={image.webp}
                            alt={image.alt}
                            hash={image.hash}
                            id={image.id}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Gallery;
