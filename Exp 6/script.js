
let arr = [];
let arrayCreated = false;


// Clear an error message
function clearError(id) {
    document.getElementById(id).textContent = "";
}


// Display an error message
function showError(id, message) {
    document.getElementById(id).textContent = message;
}


// Generate input fields according to array size
function generateInputs() {
    let size = Number(
        document.getElementById("arrayLength").value
    );

    let sizeInput = document.getElementById("arrayLength");
    let inputArea = document.getElementById("arrayInputs");
    let createButton = document.getElementById("createButton");

    clearError("sizeError");

    if (
        sizeInput.value.trim() === "" ||
        !Number.isInteger(size) ||
        size <= 0
    ) {
        showError("sizeError", "Please enter a valid positive array size.");
        sizeInput.focus();
        return;
    }

    // Reset previous array and inputs
    arr = [];
    arrayCreated = false;

    inputArea.innerHTML = "";
    createButton.hidden = false;

    document.getElementById("result").textContent =
        "Enter the array elements below.";

    // Create heading
    let heading = document.createElement("h3");
    heading.textContent = "Enter Array Elements";
    inputArea.appendChild(heading);

    // Generate fields
    for (let i = 0; i < size; i++) {
        let group = document.createElement("div");
        group.className = "input-group";

        let input = document.createElement("input");
        input.type = "text";
        input.id = "element" + i;
        input.placeholder = "Enter element " + (i + 1);

        let error = document.createElement("div");
        error.id = "elementError" + i;
        error.className = "error";

        // Clear individual error when user types
        input.addEventListener("input", function () {
            clearError(error.id);
        });

        group.appendChild(input);
        group.appendChild(error);
        inputArea.appendChild(group);
    }
}


// Create array from webpage inputs
function createArray() {
    let size = Number(
        document.getElementById("arrayLength").value
    );

    let newArray = [];

    for (let i = 0; i < size; i++) {
        let input = document.getElementById("element" + i);

        if (!input || input.value.trim() === "") {
            showError(
                "elementError" + i,
                "Please enter element " + (i + 1) + "."
            );

            if (input) {
                input.focus();
            }

            return;
        }

        clearError("elementError" + i);
        newArray.push(input.value);
    }

    arr = newArray;
    arrayCreated = true;

    document.getElementById("result").innerHTML =
        "<span class='success'><b>Array Created Successfully!</b></span><br>" +
        "<b>Current Array:</b> [" + arr.join(", ") + "]";
}


// Delete a specific element
function deleteElement() {
    clearError("deleteError");

    if (!arrayCreated) {
        showError(
            "deleteError",
            "Please specify the array size and create the array first."
        );
        return;
    }

    let value =
        document.getElementById("deleteElement").value;

    if (value.trim() === "") {
        showError("deleteError", "Please enter an element to delete.");
        return;
    }

    let index = arr.indexOf(value);

    if (index !== -1) {
        arr.splice(index, 1);

        document.getElementById("result").innerHTML =
            "<span class='success'><b>Deletion Successful!</b></span><br>" +
            "Element '" + value + "' has been deleted.<br>" +
            "<b>Updated Array:</b> [" + arr.join(", ") + "]";
    } else {
        document.getElementById("result").innerHTML =
            "<b>Deletion Failed!</b><br>" +
            "Element '" + value + "' was not found.<br>" +
            "<b>Current Array:</b> [" + arr.join(", ") + "]";
    }
}


// Search for a specific element
function searchElement() {
    clearError("searchError");

    if (!arrayCreated) {
        showError(
            "searchError",
            "Please specify the array size and create the array first."
        );
        return;
    }

    let value =
        document.getElementById("searchElement").value;

    if (value.trim() === "") {
        showError("searchError", "Please enter an element to search.");
        return;
    }

    let found = arr.includes(value);

    if (found) {
        document.getElementById("result").innerHTML =
            "<span class='success'><b>Search Successful!</b></span><br>" +
            "Element '" + value + "' is present in the array.<br>" +
            "<b>Current Array:</b> [" + arr.join(", ") + "]";
    } else {
        document.getElementById("result").innerHTML =
            "<b>Search Result:</b><br>" +
            "Element '" + value + "' is not present in the array.<br>" +
            "<b>Current Array:</b> [" + arr.join(", ") + "]";
    }
}


// Empty the array
function emptyArray() {
    arr = [];
    arrayCreated = false;

    document.getElementById("arrayInputs").innerHTML = "";
    document.getElementById("createButton").hidden = true;

    document.getElementById("arrayLength").value = "";
    document.getElementById("deleteElement").value = "";
    document.getElementById("searchElement").value = "";

    clearError("sizeError");
    clearError("deleteError");
    clearError("searchError");

    document.getElementById("result").innerHTML =
        "<b>Array Emptied Successfully!</b><br>" +
        "All elements have been removed.<br>" +
        "<b>Current Array:</b> []";
}


// Clear size error while entering a new size
document.getElementById("arrayLength").addEventListener(
    "input",
    function () {
        clearError("sizeError");
    }
);


// Clear delete error while typing
document.getElementById("deleteElement").addEventListener(
    "input",
    function () {
        clearError("deleteError");
    }
);


// Clear search error while typing
document.getElementById("searchElement").addEventListener(
    "input",
    function () {
        clearError("searchError");
    }
);
