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

    // grab existing data from local storage
    var existingData = JSON.parse(localStorage.getItem("hours"));
    //If there is already existing data
    if (existingData) {
        // the text in the respective "description" class will be whatever is in existingData
        $(this).children(".description").text(existingData[calendarHour]);
        }
});

//test for clicks in textarea
$("button").on("click", function() {
    //grab the hour the user wants to set a task for
    var hour = $(this).parent().attr("id");

    // grab the text that the user writes
    var task = $(this).siblings("textarea").val().trim()

    // grab existingData from local storage
    var existingData = JSON.parse(localStorage.getItem("hours"));

    // if existingData doesn't exist, create an array
    if (!existingData) {
        var hours = {
            9: "",
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: "",
            17: "",
        };
        // assign the task text to its respective hour
        hours[hour] = task;
        // set the empty array into local storage
        localStorage.setItem("hours", JSON.stringify(hours));
    } else {
        // assign task text to it's respective hour
        existingData[hour] = task;
        // set existingData to localStorage
        localStorage.setItem("hours", JSON.stringify(existingData))
    }
});