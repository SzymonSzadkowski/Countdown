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
]

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const giveawayInfo = document.querySelector(".giveaway-info");
const timer = document.querySelector(".text-box--timer");


// current date
var currentTime = new Date();
var currentYear = currentTime.getFullYear();
var currentMonth = currentTime.getMonth();
var currentDay = currentTime.getDate()

// giveaway finish date
const endTime = new Date(currentYear, currentMonth, currentDay , 17, 8, 0);
var endYear = endTime.getFullYear();
var endMonth = endTime.getMonth();
var endDay = endTime.getDate();
var endWeekday = endTime.getDay();
var endHour = endTime.getHours();
var endMins = endTime.getMinutes();
var endSecs = endTime.getSeconds();

var endCountdown = endTime.getTime();

giveawayInfo.textContent = `giveaway ends on ${weekdays[endWeekday]}, ${endDay} ${months[endMonth]} ${endYear}`;

const displayTimes = document.querySelectorAll(".time h4");

function getRemainingTime() {
    const today = new Date().getTime();
    let remainingTime = endCountdown - today;
    // setting values of time
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // getting details of remaining time
    let days = Math.floor(remainingTime / oneDay);
    let hours = Math.floor((remainingTime % oneDay) / oneHour);
    let minutes = Math.floor((remainingTime % oneHour) / oneMinute);
    let seconds = Math.floor((remainingTime % oneMinute) / 1000);

    let remainingDetail = [days, hours, minutes, seconds];


    function formatNumbers(item){
        if(item < 10){
            return (item = `0${item}`)
        }
        return item;
    }

    displayTimes.forEach((time, index) => {
        time.innerHTML = formatNumbers(remainingDetail[index]);
    })
    if (remainingTime < 0){
        clearInterval(countdown);
        timer.innerHTML = `<h4>The giveway has already ended. </br>Try again next time!</h4>`;
    }
}
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();


