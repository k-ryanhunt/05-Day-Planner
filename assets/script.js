var today = moment();
var time = moment();
var hour = moment().hours();

var dayWeek = today.format("dddd, MMMM Do");
$("#currentDay").text(dayWeek);

function startSchedule() {
  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var description = localStorage.getItem(id);
    if (description != "null") {
      $(this).find(".description").val(description);
    }
  });
}

startSchedule();

var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
  var hour = $(this).parent().attr("id");
  var description = $(this).siblings(".description").val();
  localStorage.setItem(hour, description);
});

function colorChange() {
  hour = time.hours();
  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("id"));
    console.log((currentHour = parseInt($(this).attr("id"))));
    if (currentHour > hour) {
      $(this).addClass("future");
    } else if (currentHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}

colorChange();