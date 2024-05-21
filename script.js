// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){
function updateTime() {
  let today = dayjs();

  // updates the time element in the header
  $("#currentDay").text(today.format("dddd, MMMM D YYYY, h:mm:ss A"));

  // For coloring the past, present, and future time blocks
  let now = parseInt(dayjs().format("H"));
  $(".time-block").each(function() {
    let blockHour = parseInt($(this).attr("data-hour"));
    $(this).removeClass("future past present");

    if (now > blockHour) {
        $(this).addClass("past");
    } else if (now === blockHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
  });
}

// textarea elements
let saveBtn = $(".saveBtn");
let scheduleElArray = $(".time-block");

renderLastRegistered();
updateTime();
setInterval(updateTime, 1000); 

// render schedule saved in local storage
function renderLastRegistered() {
  scheduleElArray.each(function() {
    let key = "time block " + $(this).attr("data-hour");
    $(this).find("textarea").val(localStorage.getItem(key));
  });
}

// function for handling clicks
function handleFormSubmit(event) {
  event.preventDefault();

  let btnClicked = $(event.currentTarget);
  let targetText = btnClicked.siblings("textarea");
  let targetTimeBlock = btnClicked.closest(".time-block").data("hour");

  // Debugging: Log textarea value and targetTimeBlock
  console.log("Textarea Value:", targetText.val());
  console.log("Data Hour:", targetTimeBlock);

  // Save data to local storage
  localStorage.setItem("time block " + targetTimeBlock, targetText.val());
}

saveBtn.on("click", handleFormSubmit); 

renderLastRegistered();
updateTime();
setInterval(updateTime, 1000);
})