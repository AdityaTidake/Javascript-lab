function strictEquality() {
    let string1 = document.getElementById("string1").value.toLowerCase();
    let string2 = document.getElementById("string2").value.toLowerCase();

    if (string1 === string2) {
        document.getElementById("equalResult").innerHTML =
            "<b>Strict Equality:</b> Both strings are equal.";
    } else {
        document.getElementById("equalResult").innerHTML =
            "<b>Strict Equality:</b> Both strings are NOT equal.";
    }
}


function compareLength() {
    let string1 = document.getElementById("string1").value.toLowerCase();
    let string2 = document.getElementById("string2").value.toLowerCase();

    if (string1.length > string2.length) {
        document.getElementById("lengthResult").innerHTML =
            "<b>Length Comparison:</b><br>" +
            "String1 Length = " + string1.length +
            "<br>String2 Length = " + string2.length +
            "<br>String1 is longer.";
    }
    else if (string1.length < string2.length) {
        document.getElementById("lengthResult").innerHTML =
            "<b>Length Comparison:</b><br>" +
            "String1 Length = " + string1.length +
            "<br>String2 Length = " + string2.length +
            "<br>String2 is longer.";
    }
    else {
        document.getElementById("lengthResult").innerHTML =
            "<b>Length Comparison:</b><br>" +
            "Both strings have the same length.";
    }
}


function alphabeticalOrder() {
    let string1 = document.getElementById("string1").value.toLowerCase();
    let string2 = document.getElementById("string2").value.toLowerCase();

    let result = string1.localeCompare(string2);

    if (result < 0) {
        document.getElementById("alphaResult").innerHTML =
            "<b>Alphabetical Order:</b><br>" +
            "\"" + string1 + "\" comes before \"" + string2 + "\".";
    }
    else if (result > 0) {
        document.getElementById("alphaResult").innerHTML =
            "<b>Alphabetical Order:</b><br>" +
            "\"" + string1 + "\" comes after \"" + string2 + "\".";
    }
    else {
        document.getElementById("alphaResult").innerHTML =
            "<b>Alphabetical Order:</b><br>" +
            "Both strings are alphabetically equal.";
    }
}