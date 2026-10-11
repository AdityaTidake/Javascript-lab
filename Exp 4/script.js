
// Convert special regex characters into literal characters
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Get both input strings in lowercase
function getStrings() {
    return {
        string1: document.getElementById("string1").value.toLowerCase(),
        string2: document.getElementById("string2").value.toLowerCase()
    };
}

// 1. Strict Equality
function strictEquality() {
    const { string1, string2 } = getStrings();

    // Using the standard JavaScript method
    const methodResult = string1 === string2
        ? "Both strings are equal."
        : "Both strings are NOT equal.";

    document.getElementById("equalResult").textContent =
        "Strict Equality (===):\n" + methodResult;

    // Using a regular expression for exact, case-insensitive matching
    const regex = new RegExp("^" + escapeRegex(string1) + "$", "i");
    const regexResult = regex.test(string2)
        ? "Both strings are equal."
        : "Both strings are NOT equal.";

    document.getElementById("regexEqualResult").textContent =
        "Regex Matching:\n" + regexResult;
}


// 2. Compare Length
function compareLength() {
    const { string1, string2 } = getStrings();

    // Using the standard length property
    let methodMessage;

    if (string1.length > string2.length) {
        methodMessage = "String 1 is longer.";
    } else if (string1.length < string2.length) {
        methodMessage = "String 2 is longer.";
    } else {
        methodMessage = "Both strings have the same length.";
    }

    document.getElementById("lengthResult").textContent =
        "Length Comparison:\n" +
        "String 1 Length = " + string1.length + "\n" +
        "String 2 Length = " + string2.length + "\n" +
        methodMessage;

    // Using a regular expression to match every character
    const chars1 = string1.match(/[\s\S]/g) || [];
    const chars2 = string2.match(/[\s\S]/g) || [];

    const length1 = chars1.length;
    const length2 = chars2.length;

    let regexMessage;

    if (length1 > length2) {
        regexMessage = "String 1 is longer.";
    } else if (length1 < length2) {
        regexMessage = "String 2 is longer.";
    } else {
        regexMessage = "Both strings have the same length.";
    }

    document.getElementById("regexLengthResult").textContent =
        "Regex Character Count:\n" +
        "String 1 Length = " + length1 + "\n" +
        "String 2 Length = " + length2 + "\n" +
        regexMessage;
}


// 3. Alphabetical Order
function alphabeticalOrder() {
    const { string1, string2 } = getStrings();

    // Using the standard localeCompare() method
    const methodResult = string1.localeCompare(string2);

    let methodMessage;

    if (methodResult < 0) {
        methodMessage =
            '"' + string1 + '" comes before "' + string2 + '".';
    } else if (methodResult > 0) {
        methodMessage =
            '"' + string1 + '" comes after "' + string2 + '".';
    } else {
        methodMessage = "Both strings are alphabetically equal.";
    }

    document.getElementById("alphaResult").textContent =
        "Using localeCompare():\n" + methodMessage;

    // Using regex to extract the complete strings before comparison
    const regex1 = string1.match(/^[\s\S]*$/);
    const regex2 = string2.match(/^[\s\S]*$/);

    const extracted1 = regex1 ? regex1[0] : "";
    const extracted2 = regex2 ? regex2[0] : "";

    // Regex extracts the strings; localeCompare determines their order
    const regexCompare = extracted1.localeCompare(extracted2);

    let regexMessage;

    if (regexCompare < 0) {
        regexMessage =
            '"' + extracted1 + '" comes before "' + extracted2 + '".';
    } else if (regexCompare > 0) {
        regexMessage =
            '"' + extracted1 + '" comes after "' + extracted2 + '".';
    } else {
        regexMessage = "Both strings are alphabetically equal.";
    }

    document.getElementById("regexAlphaResult").textContent =
        "Regex Extraction + Ordering:\n" + regexMessage;
}
