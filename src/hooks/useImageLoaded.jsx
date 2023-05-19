import { useDebugValue, useEffect, useState } from "react";

export default function useImageLoaded(images, setImageLoaded) {
    let [imageArr, setImageArr] = useState([]);
    let imagesLoaded = false;

    function loadedFun(isLoaded) {
        setImageArr((prevImageArr) => {
            return [...prevImageArr, isLoaded];
        });
    }
    if (
        imageArr.every((image) => {
            return image;
        }) &&
        images.length == imageArr.length
    ) {
        imagesLoaded = true;
    }
    useEffect(() => {
        setImageLoaded(imagesLoaded);
    }, [imagesLoaded]);

    useDebugValue(imageArr, imagesLoaded);

    return [imagesLoaded, loadedFun];
}

// ? pass all image array and the state you want to make it true
// ? return 'imagesLoaded' boolean you can use for conditional render & the update function
