//Get the current date using moment.js
var currentDate = moment().format('dddd, MMMM Do, YYYY');
//put the current date to the screen
$("#currentDay").text(currentDate);

// can I set an array to store each object?
var calendarObj = {};
var calendarItems = [];
calendarObj.calendarItems = calendarItems;

//store currentTime in 24 hr day format
var currentHour = moment().hours();

// find a way to check the below function every half hour???
//make a function to compare current time to hour blocks
$(".time-block").each(function () {
    // grab the listed hour to compare
    var calendarHour = parseInt($(this).attr("id"));
    //Compare the time and calendarHour and mark them accordingly
    if (currentHour === calendarHour) {
        $(this).addClass("present");
    }
    else if (currentHour < calendarHour) {
        $(this).addClass("future");
    }
    else {
        $(this).addClass("past");
    }
});

//test for clicks in textarea
$("button").on("click", function() {
    //grab the hour the user wants to set a task for
    var hour = $(this)
    .parent()
    .attr("id");

    // grab the text that the user writes
    var task = $(this)
    .siblings("textarea")
    .val()
    .trim()

    // store each item into the calendarItem's array
    calendarItems = {
        "hour": hour,
        "task": task
    };

    // push it into calendarObj
    calendarObj.calendarItems.push(calendarItems);

    //and finally Store the damn thing. 
    localStorage.setItem("calendarObj", JSON.stringify(calendarObj));
})


function loadTasks() {
    // assign a value for calendarItems
    calendarObj = JSON.parse(localStorage.getItem("calendarObj") || "[]")
};

loadTasks();