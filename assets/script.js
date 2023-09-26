//Display the current date in the header of the page using dayjs. 
var currentDay = dayjs().format('dddd, MMMM D; hh:mm a'); 
$('#currentDay').text(currentDay);

//Assiging variables to be used for DOM events with jQuery id selector. 
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

// Assiging save button variable with jQuery id selector. 
var saveBtn = $(".saveBtn"); 

//jQuery DOM event. Save values on a click using local storage and deploy save message.
saveBtn.on("click", function(e) {
    e.preventDefault();
    saveMessage.html("🔥 Event saved with <code>localStorage</code> 🔥");
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

//A function to print all values from localStorage to webpage when the page reloads or is revisited. 
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

//For loop to compare current hour of the day using dayjs and alter the CSS classes accordingly. 
var currentHour = dayjs().format('H');

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