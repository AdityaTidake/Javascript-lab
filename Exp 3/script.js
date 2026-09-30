// 1. Reverse String
function reverseString() {
    let str = document.getElementById("inputString").value;

    let reversed = str.split("").reverse().join("");

    document.getElementById("reverseResult").innerHTML =
        "Reversed String: " + reversed;
}


// 2. Replace Group of Characters
function replaceCharacter() {
    let str = document.getElementById("inputString").value;
    let oldChar = document.getElementById("oldChar").value;
    let newChar = document.getElementById("newChar").value;

    if (oldChar === "") {
        document.getElementById("replaceResult").innerHTML =
            "Please enter characters to replace.";
        return;
    }

    let replaced = str.split(oldChar).join(newChar);

    document.getElementById("replaceResult").innerHTML =
        "After Replacement: " + replaced;
}


// 3. Check Palindrome
function checkPalindrome() {
    let str = document.getElementById("inputString").value;

    let reversed = str.split("").reverse().join("");

    if (str.toLowerCase() === reversed.toLowerCase()) {
        document.getElementById("palindromeResult").innerHTML =
            str + " is a Palindrome";
    } else {
        document.getElementById("palindromeResult").innerHTML =
            str + " is not a Palindrome";
    }
}