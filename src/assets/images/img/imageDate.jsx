let heroImages = [
    {
        src: new URL("./hero_main_H1.jpg", import.meta.url).href,
        webp: new URL("./webp/hero_main_H1.webp", import.meta.url).href,
        alt: "mountain and lake image",
        key: crypto.randomUUID(),
        id: "H1",
        hash: "L]IE|hWBWBof~qj[j[ay%MofofWB",
        shoutOut: "Unsplash/Tansu_Topuzoğlu",
    },
];

export { heroImages };
