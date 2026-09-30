// Get the form
const form = document.getElementById("studentForm");

// Add submit event
form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get values
    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();

    // Get selected gender
    let genderElement = document.querySelector(
        'input[name="gender"]:checked'
    );

    let gender = genderElement ? genderElement.value : "";

    // Clear previous error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("cityError").innerHTML = "";
    document.getElementById("stateError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";

    let valid = true;


    // ------------------------------------------------
    // 1. NAME VALIDATION
    // ------------------------------------------------

    // Name should contain only alphabets and spaces
    let namePattern = /^[A-Za-z ]+$/;

    if (name === "") {

        document.getElementById("nameError").innerHTML =
            "Name cannot be empty.";

        valid = false;

    } else if (!namePattern.test(name)) {

        document.getElementById("nameError").innerHTML =
            "Name should contain only alphabets.";

        valid = false;
    }


    // ------------------------------------------------
    // 2. ADDRESS VALIDATION
    // ------------------------------------------------

    if (address === "") {

        document.getElementById("addressError").innerHTML =
            "Address cannot be empty.";

        valid = false;

    } else if (address.length < 5) {

        document.getElementById("addressError").innerHTML =
            "Please enter a valid address.";

        valid = false;
    }


    // ------------------------------------------------
    // 3. CITY VALIDATION
    // ------------------------------------------------

    let cityPattern = /^[A-Za-z ]+$/;

    if (city === "") {

        document.getElementById("cityError").innerHTML =
            "City cannot be empty.";

        valid = false;

    } else if (!cityPattern.test(city)) {

        document.getElementById("cityError").innerHTML =
            "City should contain only alphabets.";

        valid = false;
    }


    // ------------------------------------------------
    // STATE VALIDATION
    // ------------------------------------------------

    if (state === "") {

        document.getElementById("stateError").innerHTML =
            "State cannot be empty.";

        valid = false;

    } else if (!cityPattern.test(state)) {

        document.getElementById("stateError").innerHTML =
            "State should contain only alphabets.";

        valid = false;
    }


    // ------------------------------------------------
    // 4. GENDER VALIDATION
    // ------------------------------------------------

    if (gender === "") {

        document.getElementById("genderError").innerHTML =
            "Please select your gender.";

        valid = false;
    }


    // ------------------------------------------------
    // 5. MOBILE NUMBER VALIDATION
    // ------------------------------------------------

    // Indian mobile number: starts with 6-9 and contains 10 digits
    let mobilePattern = /^[6-9][0-9]{9}$/;

    if (mobile === "") {

        document.getElementById("mobileError").innerHTML =
            "Mobile number cannot be empty.";

        valid = false;

    } else if (!mobilePattern.test(mobile)) {

        document.getElementById("mobileError").innerHTML =
            "Enter a valid 10-digit mobile number.";

        valid = false;
    }


    // ------------------------------------------------
    // 6. EMAIL VALIDATION
    // ------------------------------------------------

    let emailPattern =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (email === "") {

        document.getElementById("emailError").innerHTML =
            "Email cannot be empty.";

        valid = false;

    } else if (!emailPattern.test(email)) {

        document.getElementById("emailError").innerHTML =
            "Enter a valid email address.";

        valid = false;
    }


    // ------------------------------------------------
    // SUCCESSFUL SUBMISSION
    // ------------------------------------------------

    if (valid) {

        // Optional prompt() as required in the question
        let confirmName = prompt(
            "Please confirm your name:",
            name
        );

        // If user cancels the prompt
        if (confirmName === null) {
            return;
        }

        // Check confirmed name
        if (confirmName.trim() === "") {

            alert("Name cannot be empty.");
            return;

        }

        if (!namePattern.test(confirmName.trim())) {

            alert("Invalid name. Please enter alphabets only.");
            return;

        }

        // Display successful page
        document.getElementById("formPage").style.display = "none";

        document.getElementById("successPage").style.display = "block";

        document.getElementById("studentDetails").innerHTML =
            "<strong>Name:</strong> " + name +
            "<br><strong>Address:</strong> " + address +
            "<br><strong>City:</strong> " + city +
            "<br><strong>State:</strong> " + state +
            "<br><strong>Gender:</strong> " + gender +
            "<br><strong>Mobile:</strong> " + mobile +
            "<br><strong>Email:</strong> " + email;
    }
});