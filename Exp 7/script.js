function createArray() {

    // ------------------------------------
    // Step 1: Accept size from user
    // ------------------------------------

    let size = parseInt(document.getElementById("arraySize").value);

    if (isNaN(size) || size <= 0) {
        alert("Please enter a valid positive size.");
        return;
    }


    // ------------------------------------
    // Step 2: Create an array
    // ------------------------------------

    let arr = [];

    // Add elements to the array using push()
    for (let i = 1; i <= size; i++) {

        arr.push("Element " + i);
    }


    // ------------------------------------
    // Display original array
    // ------------------------------------

    let output = "";

    output += "<b>Original Array:</b> ";
    output += arr.join(", ");


    // ------------------------------------
    // Step 3: Append an object
    // ------------------------------------

    let student = {
        name: "Aditya",
        age: 21,
        course: "Computer Engineering"
    };

    // Append object using push()
    arr.push(student);


    output += "<br><br>";

    output += "<b>Array after appending object:</b><br>";

    output += "Array = " + JSON.stringify(arr);


    // ------------------------------------
    // Step 4: Check whether object is array
    // ------------------------------------

    let objectIsArray = Array.isArray(student);

    output += "<br><br>";

    output += "<b>Is appended object an array?</b> ";
    output += objectIsArray;


    // Check whether the complete array is an array
    output += "<br>";

    output += "<b>Is the main array an array?</b> ";
    output += Array.isArray(arr);


    // ------------------------------------
    // Demonstrating unshift()
    // ------------------------------------

    arr.unshift("First Element");

    output += "<br><br>";

    output += "<b>After unshift():</b> ";
    output += JSON.stringify(arr);


    // ------------------------------------
    // Demonstrating shift()
    // ------------------------------------

    let removedFirst = arr.shift();

    output += "<br><br>";

    output += "<b>Element removed using shift():</b> ";
    output += removedFirst;


    // ------------------------------------
    // Demonstrating pop()
    // ------------------------------------

    let removedLast = arr.pop();

    output += "<br>";

    output += "<b>Element removed using pop():</b> ";
    output += JSON.stringify(removedLast);


    // ------------------------------------
    // Final array
    // ------------------------------------

    output += "<br><br>";

    output += "<b>Final Array:</b> ";
    output += JSON.stringify(arr);


    // Display result
    document.getElementById("result").innerHTML = output;
}