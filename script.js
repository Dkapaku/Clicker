//Click and Picture
let pictureElement = document.getElementById("Picture")
let countElement = document.getElementById("Count")
console.log(countElement)
let clickerCount = 0
function changecountNumber(){
    console.log("+3");
    clickerCount = clickerCount +3;
    countElement.textContent = clickerCount;
}
pictureElement.addEventListener("click", changecountNumber)

let ionianBootCost = 10
let ionianBootCount = 0;
//Eventlistener, (make a button for each item), add an event listener to button
// when the button is clicked ??? check the count vs cost, in enough, decrease total, change price, 
//keep track of how many of item owned/ how much its going up
let item1Element = document.getElementById("item1cost")
let blah blah blah