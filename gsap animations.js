var tl = gsap.timeline();

tl.to('.loader', {
    translateY: "-100%",
    duration: 1,
    delay: 5

})

tl.from(".logo,.nav-links>li, .download", {
    y: -100,
    opacity: 0,
    duration: .5,
    stagger: .2
})
tl.from(".container", {
    y: 100,
    scale: 0,
    duration: 1,
    opacity: 0,
    stagger: .8,
    ease: "ExpoScaleEase"

}, "first")
tl.from(".left, .right, .track, .share, .lectures, .lectures-stats, .metrics, .metrics-description", {
    y: 100,
    opacity: 0,
    duration: .8,
    stagger: .5,
    delay: .5

}, "first")