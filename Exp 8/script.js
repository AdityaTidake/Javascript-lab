// Get the mouseover element
let mouseBox = document.getElementById("mouseBox");

// Get the focus element
let focusBox = document.getElementById("focusBox");

// 1. MOUSE OVER EVENT


// Change the entire page background on mouseover
mouseBox.onmouseover = function () {

    document.body.style.backgroundColor = "yellow";

    mouseBox.textContent = "Mouse is over the box!";
};

// Restore the page background when the mouse leaves
mouseBox.onmouseout = function () {

    document.body.style.backgroundColor = "#f0f2f5";

    mouseBox.textContent = "Move your mouse over this box";
};


// 2. FOCUS EVENT

// Change input background when focused
focusBox.onfocus = function () {

    focusBox.style.backgroundColor = "pink";
};

// Restore input background when focus is lost
focusBox.onblur = function () {

    focusBox.style.backgroundColor = "white";
};


