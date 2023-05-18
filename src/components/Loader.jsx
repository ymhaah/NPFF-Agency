import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

function Loader({ loadingState, heroStart, setHeroStart }) {
    let loader = useRef(null);
    let tl = useRef();
    let loaded = [
        loadingState.c1,
        loadingState.c2,
        loadingState.c3,
        loadingState.c4,
    ];
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            tl.current = gsap.timeline();

            let animateDuration = 4;
            let animateDelay = 1;

            // ! if all the images is loaded
            if (
                loaded.every((imageLoaded) => {
                    return imageLoaded;
                })
            ) {
                tl.current
                    .to(".loading-par span", {
                        duration: animateDuration,
                        delay: animateDelay,
                        ease: "power4.out",
                        width: "100%",
                    })
                    .to(loader.current, {
                        duration: 0.3,
                        ease: "power2.inOut",
                        opacity: 0,
                        onComplete: () => {
                            setHeroStart(true);
                            document.body.classList.remove("no-scroll");
                        },
                    });
            }

            // // ! if all the images is not loaded
            // if (
            //     loaded.every((imageLoaded) => {
            //         return !imageLoaded;
            //     })
            // ) {
            //     gsap.to(".c1-loading", {
            //         duration: 10,
            //         delay: animateDelay,
            //         width: "100%",
            //     });
            // }

            // // ! if some of the images is not loaded
            // if (
            //     loaded.some((imageLoaded) => {
            //         return imageLoaded;
            //     })
            // ) {
            //     tl.current
            //         .to(".c1-loading", {
            //             duration: animateDuration,
            //             delay: animateDelay,
            //             width: "100%",
            //         })
            //         .to(".c2-loading", {
            //             duration: 10,
            //             width: "100%",
            //         });
            // }
        }, loader);
        return () => ctx.revert();
    }, []);

    return (
        <div
            className="loader"
            ref={loader}
            style={{
                display: !heroStart ? "block" : "none",
            }}
            aria-hidden={!heroStart ? false : true}
            aria-live="assertive"
        >
            <div className="Container">
                <p>0%</p>
                <div className="loading-par" aria-label="loading par">
                    <div className="skeleton">
                        <span role={!heroStart ? "progressbar" : ""}></span>
                    </div>
                </div>
                <p>100%</p>
            </div>
        </div>
    );
}

export default Loader;
