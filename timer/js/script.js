// document - это весь сайт
// console.log(typeof document);
// document.querySelector() - подключение к определенному селектору

// console.log(document.querySelector('.s'));

const sec = document.querySelector(".s") /* Секундная стрелка */,
  min = document.querySelector(".m") /* Минутная стрелка */,
  hour = document.querySelector(".h") /* Часовая стрелка */,
  minNumber = document.querySelector(
    ".minutes"
  ) /* Поключение к чиловым минутам */,
  hourNumber = document.querySelector(".hours");

let time = new Date()
  , second = time.getSeconds() * 6
  , minutes = time.getMinutes() * 6
  , hours = time.getHours() * 30;

function clock() {
  /* 

    new Date() - Берет время которое сейчас на устройтве
    getSeconds() - Это метод который берет секунды
    getMinutes() - это метод который берет минуты
    getHours() - это метод который берет часы

*/

  second += 0.25;
  minutes += (0.25) / 60;
  hours += (0.25) / 3600;
  // console.log(sec);
  sec.style = `transform: rotate(${second}deg)`;
  min.style = `transform: rotate(${minutes}deg)`;
  hour.style = `transform: rotate(${hours}deg)`;

  // Рекурсия - это когда функция вызывает саму себя
  // setTimeout() - функция которая делает задерку вызова
  let time2 = new Date()
  minNumber.innerHTML = time2.getMinutes();
  hourNumber.innerHTML = time2.getHours();

  setTimeout(() => clock(), 1000 / 24 );
}

clock();

const link = document.querySelectorAll(
  ".tabsItem"
) /* Подключение ко всем пунктам Меню табов */,
  tabs = document.querySelectorAll(
    ".tabsContentItem"
  ); /* Подклюяение ко всем табам */

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let x = 0; x < link.length; x++) {
      link[x].classList.remove("active");
      tabs[x].classList.remove("active");
    }
    tabsNew(this, tabs[i]);
  });

  // addEventListener() - метод HTML элемента который делае проверку на какието события
}
function tabsNew(links, tabs) {
  links.classList.add("active");
  tabs.classList.add("active");
}

// stopwatch

const timerPoint = document.querySelectorAll('.tabsLink__span');

const stopwatchHours = document.querySelector(".stopwatch__hours")
  , stopwatchMinutes = document.querySelector(".stopwatch__minutes")
  , stopwatchSeconds = document.querySelector(".stopwatch__seconds")
  , stopwatchBtn = document.querySelector(".stopwatch__btn");

const hoursLink = document.querySelectorAll('.stopwatch__hours')
  , minutesLink = document.querySelectorAll('.stopwatch__minutes')
  , secondsLink = document.querySelectorAll('.stopwatch__seconds');


function stopwatchActivator() {
  if (stopwatchBtn.innerHTML == "stop") {
    stopwatchSeconds.innerHTML++;
    if (stopwatchSeconds.innerHTML > 59) {
      stopwatchSeconds.innerHTML = 0;
      stopwatchMinutes.innerHTML++;
      if (stopwatchMinutes.innerHTML > 59) {
        stopwatchMinutes.innerHTML = 0;
        stopwatchHours.innerHTML++;
      }
    }
  } else if (stopwatchBtn.innerHTML == "start") {
    stopwatchSeconds.innerHTML = 0;
    stopwatchMinutes.innerHTML = 0;
    stopwatchHours.innerHTML = 0;
  }
  setTimeout(() => stopwatchActivator(), 1000);
}
stopwatchActivator();

stopwatchBtn.addEventListener("click", function () {
  if (stopwatchBtn.innerHTML == "start") {
    timerPoint[0].classList.add('active');
    stopwatchBtn.innerHTML = "stop";

  } else if (stopwatchBtn.innerHTML == "stop") {
    timerPoint[0].classList.remove('active');
    timerPoint[0].classList.add('active_clear');
    stopwatchBtn.innerHTML = "clear";

  } else {
    timerPoint[0].classList.remove('active_clear');
    stopwatchBtn.innerHTML = "start";
  }
});
