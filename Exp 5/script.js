// Variable to store the timer
let timer;


// Function to start countdown
function startCountdown() {

    // Get the date and time entered by the user
    let input = document.getElementById("endDate").value;

    // Check if user has entered a date
    if (input === "") {
        alert("Please select an end date and time.");
        return;
    }

    // Convert input into milliseconds
    let endDate = new Date(input).getTime();

    // Get current date and time
    let currentDate = new Date().getTime();

    // Check if selected date is in the past
    if (endDate <= currentDate) {
        document.getElementById("countdown").innerHTML =
            "<span id='expired'>EXPIRED</span>";

        return;
    }

    // Clear previous timer if any
    clearInterval(timer);

    // Start countdown
    timer = setInterval(function () {

        // Get current time
        let currentDate = new Date().getTime();

        // Calculate remaining time
        let remainingTime = endDate - currentDate;


        // Check if countdown is over
        if (remainingTime <= 0) {

            document.getElementById("countdown").innerHTML =
                "<span id='expired'>EXPIRED</span>";

            clearInterval(timer);

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


        // Display result
        document.getElementById("countdown").innerHTML =
            days + " Days : " +
            hours + " Hours : " +
            minutes + " Minutes : " +
            seconds + " Seconds";

    }, 1000);
}