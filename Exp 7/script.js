
let myArr = [];
let lastAddedElement;
let hasAddedElement = false;

// Display the current array and result message
function updateOutput(message, type = "info") {
    document.getElementById("arrayDisplay").textContent =
        JSON.stringify(myArr);

    const result = document.getElementById("resultMessage");
    result.textContent = message;
    result.className = "result-message " + type;
}

// Step 1: Create an array
function createArray() {
    const sizeInput = document.getElementById("arraySize").value;
    const size = Number(sizeInput);

    if (
        sizeInput.trim() === "" ||
        !Number.isInteger(size) ||
        size < 0 ||
        size > 1000
    ) {
        updateOutput(
            "Enter a valid array size between 0 and 1000.",
            "error"
        );
        return;
    }

    myArr = Array.from({ length: size }, (_, i) => i + 1);

    hasAddedElement = false;
    lastAddedElement = undefined;

    updateOutput(`Array created successfully with size ${size}.`, "success");
}

// Get the value according to the selected type
function getInputValue() {
    const rawValue = document.getElementById("inputValue").value;
    const type = document.getElementById("inputType").value;

    if (rawValue.trim() === "") {
        updateOutput("Please enter a value before adding an element.", "error");
        return { valid: false };
    }

    if (type === "number") {
        const number = Number(rawValue);

        if (!Number.isFinite(number)) {
            updateOutput("Please enter a valid number.", "error");
            return { valid: false };
        }

        return { valid: true, value: number };
    }

    if (type === "object") {
        return {
            valid: true,
            value: { value: rawValue }
        };
    }

    if (type === "array") {
        return {
            valid: true,
            value: rawValue.split(",").map(item => item.trim())
        };
    }

    return { valid: true, value: rawValue };
}

// Step 2: Add an element at the end
function pushElement() {
    const result = getInputValue();

    if (!result.valid) return;

    myArr.push(result.value);
    lastAddedElement = result.value;
    hasAddedElement = true;

    updateOutput(
        `push(): Added ${JSON.stringify(result.value)} at the end.`,
        "success"
    );
}

// Step 2: Add an element at the beginning
function unshiftElement() {
    const result = getInputValue();

    if (!result.valid) return;

    myArr.unshift(result.value);
    lastAddedElement = result.value;
    hasAddedElement = true;

    updateOutput(
        `unshift(): Added ${JSON.stringify(result.value)} at the beginning.`,
        "success"
    );
}

// Step 3: Check whether the last added element is an array
function checkIsArray() {
    if (!hasAddedElement) {
        updateOutput(
            "Please add an element before checking its type.",
            "error"
        );
        return;
    }

    const isArr = Array.isArray(lastAddedElement);

    if (isArr) {
        updateOutput(
            `Yes! ${JSON.stringify(lastAddedElement)} is an array.`,
            "success"
        );
    } else {
        updateOutput(
            `No! ${JSON.stringify(lastAddedElement)} is not an array. Type: ${lastAddedElement === null
                ? "object"
                : typeof lastAddedElement
            }.`,
            "info"
        );
    }
}

// Step 4: Remove the last element
function popElement() {
    if (myArr.length === 0) {
        updateOutput("Cannot pop: the array is empty.", "error");
        return;
    }

    const removed = myArr.pop();

    updateOutput(
        `pop(): Removed ${JSON.stringify(removed)} from the end.`,
        "success"
    );
}

// Step 4: Remove the first element
function shiftElement() {
    if (myArr.length === 0) {
        updateOutput("Cannot shift: the array is empty.", "error");
        return;
    }

    const removed = myArr.shift();

    updateOutput(
        `shift(): Removed ${JSON.stringify(removed)} from the beginning.`,
        "success"
    );
}

// Reset the entire application
function resetAll() {
    myArr = [];
    lastAddedElement = undefined;
    hasAddedElement = false;

    document.getElementById("arraySize").value = "";
    document.getElementById("inputValue").value = "";
    document.getElementById("inputType").value = "string";

    updateOutput("Create an array to get started.", "info");
}
