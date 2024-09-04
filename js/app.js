const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navlinks = document.querySelector('.nav-links')
const navlinksli = document.querySelectorAll('.nav-links li')


window.addEventListener('scroll', () => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})


navlinksli.forEach(li => li.addEventListener('click', ()=> {
    navlinksli.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
    navlinks.classList.remove('active')
}))


var options = {
    strings: [
        'Hey you!',
        'Yes you!',
        'Are you ready to Rave this summer?',
        'TAG is bringing you another summer vibe',
        'Alte -X Rave is here',
        'Tickets are now up for sale',
        'Get yours now!',
    ],
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity,
    typeSpeed: 10,
    backDelay: 2000,
};

var typed = new Typed('#hero-titles', options);

AOS.init();
