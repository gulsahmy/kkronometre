let second = 0;
let tens = 0;
let hour = 0;
let minute = 0;
let interval;

let getHour = document.querySelector(".hour");
let getMinute = document.querySelector(".minute");
let getSeconds = document.querySelector(".second");
let getTens = document.querySelector(".tens");

let btnStart = document.querySelector(".btnStart");
let btnStop = document.querySelector(".btnStop");
let btnReset = document.querySelector(".btnReset");

btnStart.addEventListener("click", () => {
  interval = setInterval(timer, 10);
});
btnStop.addEventListener("click", () => {
  clearInterval(interval);
});
btnReset.addEventListener("click", () => {
  tens = 0;
  second = 0;
  minute = 0;
  hour = 0;
  getHour.innerHTML = "00";
  getMinute.innerHTML = "00";
  getSeconds.innerHTML = "00";
  getTens.innerHTML = "00";
});

function timer() {
  tens++;
  if (tens < 10) {
    getTens.innerHTML = "0" + tens;
  }
  if (tens >= 10) {
    getTens.innerHTML = tens;
  }
  if (tens > 99) {
    second++;
    getSeconds.innerHTML = "0" + second;
    tens = 0;
    getTens.innerHTML = "0" + tens;
  }

  if (second < 10) {
    getSeconds.innerHTML = "0" + second;
  }
  if (second >= 10) {
    getSeconds.innerHTML = second;
  }
  if (second > 59) {
    minute++;
    getMinute.innerHTML = minute;
    second = 0;
    getSeconds.innerHTML = "0" + second;
  }

  if (minute < 10) {
    getMinute.innerHTML = "0" + minute;
  }
  if (minute >= 10) {
    getMinute.innerHTML = minute;
  }
  if (minute > 59) {
    hour++;
    getHour.innerHTML = hour;
    minute = 0;
    getMinute.innerHTML = "0" + minute;
  }
  if(hour < 10){
    getHour.innerHTML = "0" + hour;
  }
  if(hour >=10){
    getHour.innerHTML = hour;
  }
}
