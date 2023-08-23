
//Displays the current day and time at the top of the page.

$(document).ready (function() {
    var currentDate = dayjs().format("MMM DD, YYYY");
    $("#currentDay").text(currentDate);

    var currentTime = dayjs().format("h:mm A");
    $("#currentTime").text(currentTime);
});

//Button that clears previous entries to local storage.

var clearButton = $(".clear");
var clearMessage = $(".clearMsg");
$(".clearMsg").css({"margin-top": "25px", "font-weight": "bold"});
$(".saveMsg").css("font-weight", "bold");

clearButton.on("click", function() {
localStorage.clear();
clearMessage.text("Events Cleared. Refresh Page.");
});

//Defines the current hour and compares it to each div time block. It then assigns the blocks to a past, present, or future class which in turn changes the block to the corresponding background-color.

function setHour () {
    var currentHour = dayjs().format("H");
    console.log(currentHour);

    $(".time-block").each(function() {
        var divHour = parseInt($(this).attr("id"));

        console.log(divHour);

        if (divHour < currentHour) {
            $(this).addClass("past");
            //"==" is the loose equality operator that peforms 'type coercion', the process of automatically converting one value to another in order to make the two values equal in type as well as value.
        } else if (divHour == currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })

}

setHour();

//Button that saves entered event

var savedEventMessage = $(".saveMsg");

var saveEventButton = $(".saveBtn");
saveEventButton.on("click", function() {

    var event = $(this).parent().attr("id");

    var value = $(this).siblings(".description").val();

    //Displays a message to user that event is saved or that they need to enter an event to save.

        saveEventButton.on("click", function() {
            if (value !== "") {
            localStorage.setItem(event, value);
            function () {
            savedEventMessage.text("Event Saved!").addClass("show")
        } else {
            savedEventMessage.text("Must enter an event to save.")
        }})   
});

//Recieves the stored values inside of local storage and displays them in the corresponding blocks.

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));