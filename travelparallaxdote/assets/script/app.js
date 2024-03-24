//#region Pure JavaScript Parallax

const parallax_el = document.querySelectorAll('.parallax');
const main = document.querySelector('main');

let xValue = 0;
let yValue = 0;
let rotateDegree = 0;

// Parallax Animation Function
const parallaxEffect = (cursorPosition)=>{
    parallax_el.forEach((el)=>{
        // Every HTML ELement has his own speed of moving
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;
        
        // TranslateZ makes elements further or closer when we move cursor
        // isInLeft checks in which side of the page our cursor is
        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        // Styling each HTML element
        el.style.transform = `
        translateX(calc(-50% + ${-xValue * speedx}px)) 
        translateY(calc(-50% + ${yValue * speedy}px))
        perspective(2300px)
        translateZ(${zValue * speedz}px)
        rotateY(${rotateDegree * rotateSpeed}deg)
        `
    })
}

// To set cursor position to center of Page when page is opening / reloading
parallaxEffect(0)

// Cursor Moving Event
window.addEventListener('mousemove', (e)=>{
    // If GSAP animation runnig we're should not be able to move with cursor 
    if (tl.isActive()) return;
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = xValue / (window.innerWidth / 2) * 20;

    parallaxEffect(e.clientX)
})

//#endregion

// GSAP Reveal Animation
let tl = gsap.timeline();

// parallex_el is a nodelist, so need turn it to array to use filter and forEach methods
Array.from(parallax_el)
.filter((el)=> !el.classList.contains('text'))
.forEach((el)=>{
    tl
    .from(el, {top: `${el.offsetHeight / 2 + +el.dataset.distance}px`, duration: 3.5, ease: "power3.out"}, 0)
})


// Text Reveal Animation
tl
.from('.text h1', {
    y: window.innerHeight - document.querySelector('.text h1').getBoundingClientRect().top + 200,
    duration: 2,
}, 2)
.from('.text h2', {
    y: -300,
    duration: 2,
}, 2)

// Vignette, Sun Rays, Black Shadow, Header fade Effect

tl.from('.hide', {
    opacity: 0,
    duration: 2
}, 2)


// Responsive Design

if (window.innerWidth >= 725) {
    main.style.maxHeight = `${window.innerWidth * 0.6}px`
}else{
    main.style.maxHeight = `${window.innerWidth * 1.6}px`
}