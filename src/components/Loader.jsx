import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

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

            let line = document.querySelector(".c3-loading");
            const lineState = Flip.getState(line);

            let animateDuration = 1;
            let animateDelay = 1;

            // ! if all the images is loaded
            if (
                loaded.every((imageLoaded) => {
                    return imageLoaded;
                })
            ) {
                tl.current
                    .to(".c1-loading", {
                        duration: animateDuration,
                        delay: animateDelay,
                        width: "100%",
                    })
                    .to(".c2-loading", {
                        duration: animateDuration,
                        width: "100%",
                    })
                    .to(".c3-loading", {
                        duration: animateDuration,
                        width: "100%",
                    })
                    .to(".c4-loading", {
                        duration: animateDuration,
                        width: "100%",
                        onComplete: () => {
                            loader.current.prepend(line);
                            Flip.from(lineState, {
                                duration: animateDuration,
                                scale: true,
                                onComplete: () => {
                                    setHeroStart(true);
                                    document.body.classList.remove("no-scroll");
                                },
                            });
                        },
                    });
            }

            // ! if all the images is not loaded
            if (
                loaded.every((imageLoaded) => {
                    return !imageLoaded;
                })
            ) {
                gsap.to(".c1-loading", {
                    duration: 10,
                    delay: animateDelay,
                    width: "100%",
                });
            }

            // ! if some of the images is not loaded
            if (
                loaded.some((imageLoaded) => {
                    return imageLoaded;
                })
            ) {
                tl.current
                    .to(".c1-loading", {
                        duration: animateDuration,
                        delay: animateDelay,
                        width: "100%",
                    })
                    .to(".c2-loading", {
                        duration: 10,
                        width: "100%",
                    });
            }
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
                        <span
                            className="c1-loading"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="25"
                        ></span>
                    </div>
                    <div className="skeleton">
                        <span
                            className="c2-loading"
                            role="progressbar"
                            aria-valuemin="25"
                            aria-valuemax="50"
                        ></span>
                    </div>
                    <div className="skeleton">
                        <span
                            className="c3-loading"
                            role="progressbar"
                            aria-valuemin="50"
                            aria-valuemax="75"
                        ></span>
                    </div>
                    <div className="skeleton">
                        <span
                            className="c4-loading"
                            role="progressbar"
                            aria-valuemin="75"
                            aria-valuemax="100"
                        ></span>
                    </div>
                </div>
                <p>100%</p>
            </div>
        </div>
    );
}

export default Loader;
