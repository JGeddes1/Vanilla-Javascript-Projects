// !Date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// !Close Links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
//? non-dynamic way - linksContainer.classList.toggle('show-links');

const containerHeight = linksContainer.getBoundingClientRect().height;
const linksHeight = links.getBoundingClientRect().height;
console.log(linksHeight);
console.log(containerHeight);

if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
}
else{
    linksContainer.style.height =0;
}
});

//! Fixed Nav Bar
const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
const scrollHeight = window.pageYOffset;
const navHeight = navBar.getBoundingClientRect().height;
if (scrollHeight > navHeight) {
    navBar.classList.add('fixed-nav');
}
else{
    navBar.classList.remove('fixed-nav');
}


if (scrollHeight >500) {
    topLink.classList.add('show-link');
}
else{
topLink.classList.remove('show-link');
}
})


// !SSmooth Scroll

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
    //  prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        // console.log(id);
        const element = document.getElementById(id);
        // cakckate tge heights
        
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight >84) {
            position = position +containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;

    });
});