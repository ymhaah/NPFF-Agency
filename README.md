# NPFF-Agency 
> Not finished | Start at: Mar 6, 2023

### Project Description

This is a landing page for a Design Portfolio website designed to showcase a mock project for a design agency with a focus on people and their unique experiences. The goal of this project is to create a visually appealing and responsive landing page that highlights the concept of a modern portfolio. The page includes interactive elements and modern UI/UX design principles.


### Screenshot

![hero](/design/NPFF.jpeg)
![hero](/design/NPPF2.jpeg)
![hero](/design/NPPF3.jpeg)

### Links

-   [live site link](https://main--hilarious-vacherin-6fb6b7.netlify.app/)
-   [Elvina Prasad – Portfolio](https://www.elvinaprasad.com/) - Inspired by it.
-   [CSS Single Element Goey Spinner](https://codepen.io/z-/pen/YzPxWyW) - website loader.

### ShoutOut

-   Unsplash (website images)
    -   jordy_munoz
    -   chi_lok_tsang
    -   amritansh_dubey
    -   rafael_hoyos_weht

### Built with

-   HTML
-   CSS
-   JS
-   [Sass](https://sass-lang.com/) - CSS extension language.
-   [React](https://react.dev/) - JS library.
-   [Vite](https://vitejs.dev/) - JS bundling tool.
-   [Gsap](https://greensock.com/gsap/) - JS animation tool.
-   [lenis](https://lenis.studiofreight.com/) - smooth scrolling.
-   [react-hot-toast](https://react-hot-toast.com/) - React notifications.
-   [blurhash](https://blurha.sh/) - image blur.

### What I learned

_Open Graph Meta Tags_

```html
<meta name="twitter:card" content="" />
<meta name="twitter:title" content="" />
<meta name="twitter:description" content="" />
<meta name="twitter:image" content="" />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://ymhaah.github.io/NPFF-Agency/" />
<meta property="og:title" content="" />
<meta property="og:image" content="" />
<meta property="og:description" content="" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

_HTML `<noscript>` Tag_

```html
<noscript>
    <div class="no-script">
        <p>Please enable JavaScript to view this website.</p>
    </div>
</noscript>
```

_HTML `nomodule` attribute for script elements_

```html
<script nomodule="">
    var div = document.createElement("div");
    var p = document.createElement("P");
    div.classList.add("old-script");
    p.textContent =
        "Please update your browser to modern version to view this website.";
    div.appendChild(p);
    document.body.appendChild(div);
</script>
```

_jsconfig file_

```json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "allowSyntheticDefaultImports": true,
        "baseUrl": "./",
        "paths": {
            "@ui/*": ["./src/components/uiComponents/*"],
            "@comp/*": ["./src/components/*"]
        }
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
}
```

_Self-hosting fonts with @font-face_

```css
@font-face {
    font-family: "Mosk";
    font-weight: 200;
    font-style: normal;
    font-display: swap;
    src: url("./assets/fonts/Mosk/Extra-Light_200.woff2") format("woff2"), url("./assets/fonts/Mosk/Extra-Light_200.woff")
            format("woff"),
        url("./assets/fonts/Mosk/Extra-Light_200.ttf") format("truetype");
}
```

_mix-blend-mode_

```css
h1 {
    mix-blend-mode: difference;
}
```

_text-wrap_

```css
:where(h1, h2, h3, h4) {
    text-wrap: balance;
}
```

_Make elements follow rounded corners with CSS cos() & sin()_

```scss
.circle {
    --circle-size: ;
    --sons-size: ;
    --circle-radius: calc(calc(var(--circle-size) - var(--sons-size)) / 2);
    --son-deg: calc(360deg / #{$son-num});
    width: var(--circle-size);
    height: var(--circle-size);
    position: relative;
    @for $inti from 1 to $son-num + 1 {
        & :nth-child(#{$inti}) {
            --deg: calc(var(--son-deg) * #{$inti});
        }
    }
    span {
        --X: calc(
            var(--circle-radius) + (var(--circle-radius) * cos(var(--deg)))
        );
        --Y: calc(
            var(--circle-radius) + (var(--circle-radius) * sin(var(--deg)))
        );
        width: var(--sons-size);
        height: var(--sons-size);
        position: absolute;
        top: var(--Y);
        left: var(--X);
        margin: 0;
    }
}
```

_useMousePosition react hook to get mouse position_

```jsx
export default function useMousePosition(handleMouseFun, isUsingGsap = true) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    if (isUsingGsap) {
        import("gsap");
    }
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        handleMouseFun(mousePos.x, mousePos.y);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mousePos]);

    useDebugValue(mousePos);

    return mousePos;
}
```

_useGsap to use gsap with the `gsap.context` in react_

```jsx
export default function useGsap(animation, father) {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            animation();
        }, father);
        return () => ctx.revert();
    }, []);
}
```

_react image component for image with blurhash_

```jsx
function Image({
    className = "",
    src,
    webp,
    hash,
    id = null,
    loaded,
    alt = "",
}) {
    const [imgLoaded, setImgLoaded] = useState(false);
    let image = useRef(null);

    return (
        <div className={`image ${className}`}>
            {hash && (
                <div
                    className="blur"
                    style={{
                        display: !imgLoaded ? "inline" : "none",
                    }}
                    aria-hidden={imgLoaded}
                >
                    <Blurhash hash={hash} />
                </div>
            )}

            <picture>
                {webp && <source type="image/webp" srcSet={webp} />}
                <img
                    ref={image}
                    src={src}
                    onLoad={() => {
                        setImgLoaded(true);
                        loaded && loaded(true);
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
```

### Continued development

-   more gsap & scrollTrigger

## Useful resources

Check out my latest previous articles:

-   [Top 5 websites to sharpen your front-end skills.](https://dev.to/ymhaah/top-5-websites-to-sharpen-your-front-end-skills-3ao0)
-   [How To Build An Advanced Light/Dark Theme Website!](https://dev.to/ymhaah/how-to-build-an-advanced-lightdark-theme-website-gke)
-   [30-Day React Learning Journey!](https://dev.to/ymhaah/series/20473)

## Author
-   professional links:
    - [Twitter / X](https://twitter.com/hafanwy)
    - [LinkedIn](https://www.linkedin.com/in/youssef-hafnawy/)
    - [Newsletter](https://hefnawystudio.substack.com/?utm_source=navbar&utm_medium=web&r=31jf6o)
-   Hire me:
    -   [UpWork](https://www.upwork.com/freelancers/~01acd8e5370e5646aa)
-   Blog:
    -   [Medium](https://medium.com/@ymhaah250)
    -   [Dev.to](https://dev.to/ymhaah)

### Free Services
- [Free Website performance Optimization](https://tally.so/r/nPzKaB)   
- [Free Website Accessibility Optimization](https://tally.so/r/3lr2bp)   
