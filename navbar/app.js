const links = document.querySelector('.links');
const showLinks = document.querySelector('.show-links');
const burger = document.querySelector('.nav-toggle');


burger.addEventListener('click', function(){
   links.classList.toggle('show-links');
});


