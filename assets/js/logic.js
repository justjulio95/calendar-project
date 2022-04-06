//Get the current date using moment.js
var currentDate = moment().format('dddd, MMMM Do, YYYY');
//put the current date to the screen
$("#currentDay").text(currentDate);

//store the current hour in 12 hr day format
//Maybe I can use the below when I figure out how to compare that successfully to straight numbers
//let formattedTime = new Date().toLocaleTimeString('en-US');

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
    var hour = $(this).parent().attr("id");
    var task = $(this).siblings("textarea").val().trim()

    var calendarItem = localStorage.setItem(hour, task)
})

/*function loadTasks() {
    var tasksList = localStorage.getItem(hour, task);

    if (!tasksList) {

    }
}*/