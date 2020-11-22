const newYears = new Date("January 1, 2021 00:00:00");
const date = new Date ();
const day = document.getElementById('days')
const hour = document.getElementById('hours')
const min = document.getElementById('minutes')
const sec = document.getElementById('seconds')

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date ();

    const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/60) % 60 ;
    const secs = Math.floor(totalSeconds/1) % 60 ;
    console.log(days, hours, mins, secs);
    
    day.textContent = days;
    hour.textContent = hours;
    min.textContent = mins;
    sec.textContent = secs;

   
}
console.log(date);



countdown();

setInterval(countdown,1000)