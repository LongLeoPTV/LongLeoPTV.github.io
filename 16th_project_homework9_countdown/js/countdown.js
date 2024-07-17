var min = 9;
var sec = 59;

var cdmin = setInterval(minutes, 60000);

function minutes() {
  min--;
  if (min < 0) {
    clearInterval(cdmin);
    alert("You are out of time for this task");
  }
}

var cdsec = setInterval(seconds, 1000);

function seconds() {
  sec--;
  if (sec < 0 && min >= 0) {
    sec = 59;
  } else if (sec === 0 && min < 0) {
    clearInterval(cdsec);
  }

  updateTime();
}

function updateTime() {
  console.log(`Bạn còn ${min} : ${sec}`);
}