let heroImages = [
    {
        src: new URL("./hero-main-H1.jpg", import.meta.url).href,
        webp: new URL("./webp/hero-main-H1.webp", import.meta.url).href,
        alt: "Someone walking down a dark corridor",
        key: crypto.randomUUID(),
        id: "H1",
        hash: "LD8=1uH=4T?wR4o#tmV?00%h.8D$",
        shoutOut: "Unsplash/jordy_munoz",
    },
    {
        src: new URL("./hero-main-H2.jpg", import.meta.url).href,
        webp: new URL("./webp/hero-main-H2.webp", import.meta.url).href,
        alt: "Someone hanging Japanese decorations",
        key: crypto.randomUUID(),
        id: "H2",
        hash: "LPC6T9enNFMx~XV@WAMxXmIoofM{",
        shoutOut: "Unsplash/chi_lok_tsang",
    },
    {
        src: new URL("./hero-main-H3.jpg", import.meta.url).href,
        webp: new URL("./webp/hero-main-H3.webp", import.meta.url).href,
        alt: "Empty train seats",
        key: crypto.randomUUID(),
        id: "H3",
        hash: "LA7x2P%MD%4n~qxuIU9F%Mj]axD%",
        shoutOut: "Unsplash/amritansh_dubey",
    },
    {
        src: new URL("./hero-main-H4.jpg", import.meta.url).href,
        webp: new URL("./webp/hero-main-H4.webp", import.meta.url).href,
        alt: "A person standing between buildings and smoking a cigar",
        key: crypto.randomUUID(),
        id: "H4",
        hash: "LRGv3LS5M|R%~qWVD%oe%Nj]M{t7",
        shoutOut: "Unsplash/chi_lok_tsang",
    },
    {
        src: new URL("./hero-main-H5.jpg", import.meta.url).href,
        webp: new URL("./webp/hero-main-H5.webp", import.meta.url).href,
        alt: "Modern city",
        key: crypto.randomUUID(),
        id: "H5",
        hash: "LLCj2}n+4TyD?^s:H?o}0#t8%1RQ",
        shoutOut: "Unsplash/rafael_hoyos_weht",
    },
];

export { heroImages };