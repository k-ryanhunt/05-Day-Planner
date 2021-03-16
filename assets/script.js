var today = moment();

var dayWeek = today.format("dddd, MMMM Do");
$("#currentDay").text(dayWeek);

var timeEl = $("#time");
var inputEl = $("#input");
var buttonEl = $("#saveBtn");

var timeblocks = [
  moment().hour(9).format('HH:00'),
  moment().hour(10).format('HH:00'),
  moment().hour(11).format('HH:00'),
  moment().hour(12).format('HH:00'),
  moment().hour(13).format('HH:00'),
  moment().hour(14).format('HH:00'),
  moment().hour(15).format('HH:00'),
  moment().hour(16).format('HH:00'),
  moment().hour(17).format('HH:00')
];

for (var i = 0; i < timeblocks.length; i++) {
  var timeblocksEl = $("<tr>");
  timeblocksEl.text(timeblocks[i]);
  timeblocksEl.addClass("time-block row hour");
  timeEl.append(timeblocksEl);

  var inputRowEl = $("<textarea>");
  inputRowEl.addClass("col-12 row description");
  inputEl.append(inputRowEl);

  var saveBtnEl = $("<button>");
  saveBtnEl.text('BUTTON');
  saveBtnEl.addClass("saveBtn row");
  buttonEl.append(saveBtnEl);
}

function checkTime() {
  var currentTime = moment().hour('').format("HH:00");
  var timeBlockHours = $(".description");

  for (var i = 0; i < timeBlockHours.length; i++) {
    var timeElement = timeBlockHours[i].id;
    var manipID = document.getElementById(timeBlockHours[i].id);
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

setInterval(checkTime(), 1000 * 60 * 5);

var userTask = document.querySelector('.col-12.row.description');

$('.saveBtn').click(function saveData(event) {
  event.preventDefault();
  var taskAtHand = {
    task: userTask.value.trim()
  };
  localStorage.setItem('taskAtHand', JSON.stringify(taskAtHand));
  renderLastTasks();
});

function renderLastTasks() {
  var lastTasks = JSON.parse(localStorage.getItem("taskAtHand"));
  if (lastTasks !== null) {
    document.querySelector(".col-12.row.description").textContent = lastTasks.task
  }
}