const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30 ,0)
// let futureDate = new Date(2020, 11, 24, 11, 30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();


let month = futureDate.getMonth()

month = months[month];
// console.log(selectedMonth);


let date = futureDate.getDate();
let day = futureDate.getDay();
console.log(day);
day = weekdays[day];

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hours}: ${mins}am`


// futuretime in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){

const today = new Date().getTime();
const t = futureTime - today;
console.log(t);
// 1 sec = 1000ms
// 1min = 60sec
// 1hour = 60min
// 1day = 24hours

// values in ms
const oneDay = 24*60*60*1000;
const oneHour = 60*60*1000;
const oneMin = 60*1000;
// console.log(oneDay);

let days = t /oneDay;
days = Math.floor(days);
// console.log(days);

let hours = Math.floor((t%oneDay)/oneHour);
let minutes = Math.floor((t%oneHour)/oneMin);
let seconds = Math.floor((t%oneMin)/1000);

// set values array
const values = [days, hours, minutes, seconds]

function format(item){
  if (item < 10) {
    return item = `0${item}`
  }
  return item
}

items.forEach(function(item, index){
  item.innerHTML = format(values[index]);
});
if (t < 0) {
  clearInterval(countdown);
  deadline.innerHTML = `<h4 class="expired">Sorry this giveaway has expired</h4> `;
}
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);


getRemainingTime();
