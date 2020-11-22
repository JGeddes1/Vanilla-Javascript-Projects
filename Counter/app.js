let count = 0;

const btns = document.querySelectorAll('.btn');
const counter = document.getElementById('counter');

btns.forEach(btn => {
    btn.addEventListener('click', function(e){
     const   styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        } 
        else {
            count = 0;
        }
        counter.textContent = count;

        if (count > 0) {
            counter.style.color = 'green';
        }
        if (count === 0) {
            counter.style.color = 'black';
        }
        if (count < 0) {
            counter.style.color = 'red';
        }
 
    }) ;   
});
