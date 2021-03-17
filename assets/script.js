  
var today = moment();

var dayWeek = today.format("dddd, MMMM Do");
$("#currentDay").text(dayWeek);

var timeEl = $("#time");
var inputEl = $("#input");
var buttonEl = $(".saveBtn");

function checkTime() {
  var currentTime = moment().hour('').format("HH:00");
  var timeBlockHours = $(".hour");

  for (var i = 0; i < timeBlockHours.value; i++) {
    var timeElement = timeBlockHours[i].value;
    var manipID = document.getElementById(timeBlockHours[i].value);
    $(timeBlockHours[i].id).removeClass("hour");
    if (timeElement < currentTime) {
      $(manipID).addClass("past");
    } else if (timeElement > currentTime) {
      $(manipID).addClass("future");
    } else {
      $(manipID).addClass("present");
    }
  }
}

var userTask = document.querySelector('.description');

buttonEl.on('click', function saveData(event) {
  event.preventDefault();
  var taskAtHand = {
    task: userTask.value
  };
  localStorage.setItem('taskAtHand', JSON.stringify(taskAtHand));
  renderLastTasks();
});

function renderLastTasks() {
  var lastTasks = JSON.parse(localStorage.getItem("taskAtHand"));
  if (lastTasks !== null) {
    document.querySelectorAll(".description").textContent = lastTasks.task
  }
}