gsap.registerPlugin (ScrollTrigger);

gsap.from("main",{
    opacity:-5,
    duration:2,
    y: -300,
})

const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const card4 = document.querySelector(".card4")
const card5 = document.querySelector(".card5")
const card6 = document.querySelector(".card6")


gsap.from(card1,{
    duration:3,
    opacity:0,
    x:"-=1000",
    pin:true,
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
    pin:true,
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
    pin:true,
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
    pin:true,
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
    pin:true,
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
    pin:true,
    ease:"linear",
    scrollTrigger:{
        trigger: card6,
        start: "top 100%",
        end: "100% 100%",
        pinSpacing:true,
        scrub: 2,
    }
})


gsap.from(".container3__enlaceNft",{
    duration:3,
    opacity:0,
    y:"+=200",
    ease:"linear",
    scrollTrigger:{
        trigger: ".container3__enlaceNft",
        start: "top 150%",
        end: "100% 100%",
        scrub: 2,
    }
})
