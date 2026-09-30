let arr = [];


// Create array
function createArray() {

    let size = parseInt(
        document.getElementById("arrayLength").value
    );

    if (isNaN(size) || size <= 0) {
        alert("Enter a valid array size.");
        return;
    }

    arr = [];

    for (let i = 0; i < size; i++) {

        let value = prompt(
            "Enter element " + (i + 1) + ":"
        );

        arr.push(value);
    }

    displayArray();
}


// Perform operations using standard methods
function performOperations() {

    if (arr.length === 0) {
        alert("Create the array first.");
        return;
    }

    let deleteElement =
        document.getElementById("deleteElement").value;

    let searchElement =
        document.getElementById("searchElement").value;


    // --------------------------------
    // 1. Remove specific element
    // --------------------------------

    let index = arr.indexOf(deleteElement);

    if (index !== -1) {
        arr.splice(index, 1);
    }


    // --------------------------------
    // 2. Check if value exists
    // --------------------------------

    let found = arr.includes(searchElement);


    // Display result
    document.getElementById("result").innerHTML =
        "<b>Array after deletion:</b> " +
        arr.join(", ") +
        "<br><br>" +

        "<b>Is '" + searchElement +
        "' present?</b> " +
        (found ? "Yes" : "No");
}


// Empty array using length
function emptyArray() {

    arr.length = 0;

    document.getElementById("result").innerHTML =
        "<b>Array has been emptied.</b><br><br>" +
        "Current Array: []";
}


// Display array
function displayArray() {

    document.getElementById("result").innerHTML =
        "<b>Array Created:</b> " +
        arr.join(", ");
}