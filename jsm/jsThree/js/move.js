gsap.registerPlugin (ScrollTrigger);
gsap.registerPlugin( CSSPlugin )

gsap.from("main",{
    opacity:-2,
    duration:3.3,
    y: -200,
})

/* Header */


gsap.from(".nav__logo",{
    opacity:0,
    duration:3.3,
    x: -400,
})

gsap.from(".nav__listEnlaces",{
    opacity:0,
    duration:3.3,
    y: -200,
})



const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const card4 = document.querySelector(".card4")
const card5 = document.querySelector(".card5")
const card6 = document.querySelector(".card6")



/* MOVILE CARD */

gsap.from(card1,{
    duration:3,
    opacity:0,
    x:"-=1000",
    ease:"linear",
    scrollTrigger:{
        trigger: card1,
        start: "top 100%",
        end: "100% 100%",
        pinSpacing:true,
        scrub: 2,
    }
})

gsap.from(card2,{
    duration:3,
    opacity:0,
    x:"+=1000",
    ease:"linear",
    scrollTrigger:{
        trigger: card2,
        start: "top 100%",
        end: "100% 100%",
        pinSpacing:true,
        scrub: 2,
    }
})


gsap.from(card3,{
    duration:3,
    opacity:0,
    x:"-=1000",
    ease:"linear",
    scrollTrigger:{
        trigger: card3,
        start: "top 100%",
        end: "100% 100%",
        pinSpacing:true,
        scrub: 2,
    }
})


gsap.from(card4,{
    duration:3,
    opacity:0,
    x:"+=1000",
    ease:"linear",
    scrollTrigger:{
        trigger: card4,
        start: "top 100%",
        end: "100% 100%",
        pinSpacing:true,
        scrub: 2,
    }
})


gsap.from(card5,{
    duration:3,
    opacity:0,
    x:"-=1000",
    ease:"linear",
    scrollTrigger:{
        trigger: card5,
        start: "top 100%",
        end: "100% 100%",
        pinSpacing:true,
        scrub: 2,
    }
})


gsap.from(card6,{
    duration:3,
    opacity:0,
    x:"+=1000",
    ease:"linear",
    scrollTrigger:{
        trigger: card6,
        start: "top 100%",
        end: "100% 100%",
        pinSpacing:true,
        scrub: 2,
    }
})




gsap.from(".container3__title",{
    opacity:-4,
    scale:.5,
    scrollTrigger:{
        trigger: ".container3__title",
        start: "top 80%",
        end: "100% 100%",
        scrub: 4,
    }
})

gsap.from(".container3__text",{
    opacity:-4,
    scale:.5,
    scrollTrigger:{
        trigger: ".container3__text",
        start: "top 80%",
        end: "100% 100%",
        scrub: 4,
    }
})

gsap.from(".starsWebGL",{
    opacity:-2,
    scale:.5,
    scrollTrigger:{
        trigger: ".starsWebGL",
        start: "top 100%",
        end: "100% 100%",
        scrub: 4,
    }
})


/* cards */

gsap.from(".container3__card-webgl",{
    opacity:-5,
    x: 600,
    ease: "Back.easeOut",
    scrollTrigger:{
        trigger: ".container3__card-webgl",
        start: "top 100%",
        end: "100% 100%",
        scrub: 4,
    }
})

gsap.from(".container3__card-webgl2",{
    opacity:-5,
    x: 600,
    ease: "Back.easeOut",
    scrollTrigger:{
        trigger: ".container3__card-webgl2",
        start: "top 100%",
        end: "100% 100%",
        scrub: 4,
    }
})

gsap.from(".container3__card-webgl4",{
    opacity:-5,
    x: 600,
    ease: "Back.easeOut",
    scrollTrigger:{
        trigger: ".container3__card-webgl4",
        start: "top 100%",
        end: "100% 100%",
        scrub: 4,
    }
})

gsap.from(".container3__card-webgl6",{
    opacity:-5,
    x: 600,
    ease:"Back.easeOut",
    scrollTrigger:{
        trigger: ".container3__card-webgl6",
        start: "top 100%",
        end: "100% 100%",
        scrub: 4,
    }
})




/* CONTAINER 4 */

gsap.from(".container4",{
    opacity:-3,
    scale:2,
    scrollTrigger:{
        trigger: ".container4",
        start: "top 100%",
        end: "100% 100%",
        scrub: 2,
    }
})

gsap.from(".container4__title",{
    opacity:-3,
    scale:2,
    scrollTrigger:{
        trigger: ".container4__title",
        start: "top 100%",
        end: "100% 100%",
        scrub:1.8,
    }
})

gsap.from(".container4__text2",{
    opacity:-3,
    x: 600,
    scrollTrigger:{
        trigger: ".container4__text2",
        start: "top 60%",
        end: "100% 100%",
        scrub: 2.2,
    }
})

gsap.from(".container4__text1",{
    opacity:-2,
    x: -600,
    scrollTrigger:{
        trigger: ".container4__text1",
        start: "top 60%",
        end: "100% 100%",
        scrub: 2.2,
    }
})

gsap.from(".container4__line",{
    opacity:-2,
    y: 300,
    ease: "Back.easeOut",
    scrollTrigger:{
        trigger: ".container4__line",
        start: "top 150%",
        end: "100% 100%",
        scrub: 2.2,
    }
})

