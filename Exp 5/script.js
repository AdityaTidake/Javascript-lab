// Variable to store the timer
let timer = null;


// Function to start countdown
function startCountdown() {

    // Get the date and time entered by the user
    let input = document.getElementById("endDate").value;

    // Get the message element
    let message = document.getElementById("message");

    // Clear the previous message
    message.textContent = "";

    // Check if the user has entered a date
    if (input === "") {
        message.textContent = "Please select an end date and time.";
        return;
    }

    // Convert input into milliseconds
    let endDate = new Date(input).getTime();

    // Check if the date is valid
    if (isNaN(endDate)) {
        message.textContent = "Please enter a valid date and time.";
        return;
    }

    // Check if the selected date is in the past
    if (endDate <= new Date().getTime()) {

        message.textContent =
            "Please select a future date and time.";

        document.getElementById("countdown").innerHTML =
            "<span id='expired'>EXPIRED</span>";

        clearInterval(timer);
        timer = null;

        return;
    }

    // Clear the previous timer if any
    clearInterval(timer);
    timer = null;

    // Function to update countdown
    function updateCountdown() {

        // Get current date and time
        let currentDate = new Date().getTime();

        // Calculate remaining time
        let remainingTime = endDate - currentDate;

        // Check if countdown is over
        if (remainingTime <= 0) {

            document.getElementById("countdown").innerHTML =
                "<span id='expired'>EXPIRED</span>";

            message.textContent = "The countdown has expired.";

            clearInterval(timer);
            timer = null;

            return;
        }

        // Calculate days
        let days = Math.floor(
            remainingTime / (1000 * 60 * 60 * 24)
        );

        // Calculate hours
        let hours = Math.floor(
            (remainingTime % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        // Calculate minutes
        let minutes = Math.floor(
            (remainingTime % (1000 * 60 * 60))
            / (1000 * 60)
        );

        // Calculate seconds
        let seconds = Math.floor(
            (remainingTime % (1000 * 60))
            / 1000
        );

        // Display countdown
        document.getElementById("countdown").textContent =
            days + " Days : " +
            hours + " Hours : " +
            minutes + " Minutes : " +
            seconds + " Seconds";
    }

    // Clear any previous error message
    message.textContent = "";

    // Update countdown immediately
    updateCountdown();

    // Start the timer if the countdown has not expired
    if (endDate > new Date().getTime()) {
        timer = setInterval(updateCountdown, 1000);
    }
}


// Function to reset countdown
function resetCountdown() {

    // Stop the timer
    clearInterval(timer);
    timer = null;

    // Clear the date and time input
    document.getElementById("endDate").value = "";

    // Clear the validation message
    document.getElementById("message").textContent = "";

    // Restore the default countdown display
    document.getElementById("countdown").textContent =
        "00 Days : 00 Hours : 00 Minutes : 00 Seconds";
}


// Add event listener to Start button
document.getElementById("startBtn").addEventListener(
    "click",
    startCountdown
);


// Add event listener to Reset button
document.getElementById("resetBtn").addEventListener(
    "click",
    resetCountdown
);