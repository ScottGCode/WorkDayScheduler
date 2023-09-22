//Display the current date in the header of the page using dayjs. 
var currentDay = dayjs().format('dddd, MMMM D'); 
$('#currentDay').text(currentDay);

//Declare variables to be used.
var nineAmText = $("#hour-0");
var tenAmText = $("#hour-1");
var elevenAmText = $("#hour-2");
var twelvePmText = $("#hour-3");
var onePmText = $("#hour-4");
var twoPmText = $("#hour-5");
var threePmText = $("#hour-6");
var fourPmText = $("#hour-7");
var fivePmText = $("#hour-8");
var saveMessage = $("#message");
var timeBlock = $(".time-block");

// Variable for save button on a click event to store textarea value to local storage.
var saveBtn = $(".saveBtn"); 

//Save values on a click to local storage and deploy save message.
saveBtn.on("click", function(e) {
    e.preventDefault();
    saveMessage.html("Meeting saved with <code>localStorage</code> !");
    saveMessage.attr("style", "text-align: center; font-size: 14px");
    nineAmVal = nineAmText.val();
    tenAmVal = tenAmText.val();
    elevenAmVal = elevenAmText.val();
    twelvePmVal = twelvePmText.val();
    onePmVal = onePmText.val();
    twoPmVal = twoPmText.val();
    threePmVal = threePmText.val();
    fourPmVal = fourPmText.val();
    fivePmVal = fivePmText.val();
    localStorage.setItem("hour0", nineAmVal);
    localStorage.setItem("hour1", tenAmVal);
    localStorage.setItem("hour2", elevenAmVal);
    localStorage.setItem("hour3", twelvePmVal);
    localStorage.setItem("hour4", onePmVal);
    localStorage.setItem("hour5", twoPmVal);
    localStorage.setItem("hour6", threePmVal);
    localStorage.setItem("hour7", fourPmVal);
    localStorage.setItem("hour8", fivePmVal);

});

function init() {
    nineAmText.text(localStorage.getItem("hour0"));
    tenAmText.text(localStorage.getItem("hour1"));
    elevenAmText.text(localStorage.getItem("hour2"));
    twelvePmText.text(localStorage.getItem("hour3"));
    onePmText.text(localStorage.getItem("hour4"));
    twoPmText.text(localStorage.getItem("hour5"));
    threePmText.text(localStorage.getItem("hour6"));
    fourPmText.text(localStorage.getItem("hour7"));
    fivePmText.text(localStorage.getItem("hour8"));
};

init()

var currentHour = dayjs().format('h');

for (var i = 0; i < timeBlock.length; i++){
    if (timeBlock[i].dataset.time == currentHour) {
        timeBlock[i].classList.remove("past");
        timeBlock[i].classList.remove("future");
        timeBlock[i].classList.add("present");
    };
    if (timeBlock[i].dataset.time > currentHour) {
        timeBlock[i].classList.remove("past");
        timeBlock[i].classList.remove("present");
        timeBlock[i].classList.add("future");
    };
    if (timeBlock[i].dataset.time < currentHour) {
        timeBlock[i].classList.remove("present");
        timeBlock[i].classList.remove("future");
        timeBlock[i].classList.add("past");
    }
    };



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
