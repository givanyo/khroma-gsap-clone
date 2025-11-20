gsap.registerPlugin(ScrollTrigger);
const headerElements = [".title", ".main-phrase", ".header p", "button"];
const gridElements = [".grid", ".grid-content"];

gsap.from(headerElements, {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".title",
        start: "top 80%",   
    }
});

gsap.from(gridElements, {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    delay: 0.2,
    scrollTrigger: {
        trigger: ".grid",
        start: "top 80%",
    }
});


gsap.from(".image-container", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    delay: 0.2,
    scrollTrigger: {
        trigger: ".image-container",
        start: "top 80%",
    }
})
