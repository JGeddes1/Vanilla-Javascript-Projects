const sideBar = document.querySelector('.sidebar');
const togglBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

togglBtn.addEventListener('click', function(){
   sideBar.classList.toggle('show-sidebar');
   
});


closeBtn.addEventListener('click', function(){
    sideBar.classList.remove('show-sidebar');
});