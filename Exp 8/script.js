// Get the mouse over element
let mouseBox = document.getElementById("mouseBox");

// Get the focus element
let focusBox = document.getElementById("focusBox");


// ------------------------------------------
// 1. MOUSE OVER EVENT
// ------------------------------------------

mouseBox.onmouseover = function () {

    // Change background color
    mouseBox.style.backgroundColor = "lightgreen";
};


// Change back when mouse leaves
mouseBox.onmouseout = function () {

    mouseBox.style.backgroundColor = "lightblue";
};


// ------------------------------------------
// 2. FOCUS EVENT
// ------------------------------------------

focusBox.onfocus = function () {

    // Change background color when focused
    focusBox.style.backgroundColor = "lightpink";
};


// Change back when focus is lost
focusBox.onblur = function () {

    focusBox.style.backgroundColor = "white";
};