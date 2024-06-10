document.querySelector(".formSubmit").addEventListener("click", (e) => {
    e.preventDefault();

    // Regular expressions for validation
    const usernameReg = /^[A-Za-z0-9]{3,25}$/;
    const passwordReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{4,}$/;
    const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneReg = /^[6-9][\d]{9}$/;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach((currElem) => currElem.textContent = "");

    // Get input values
    const username = document.getElementById("username").value;
    const phone = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;

    let isValid = true;

    // Validate username
    if (!usernameReg.test(username)) {
        document.getElementById('usernameError').textContent = "*Username is not valid";
        isValid = false;
    }

    // Validate contact number
    if (!phoneReg.test(phone)) {
        document.getElementById('contactError').textContent = "*Phone number must be of 10 digits starting with 6-9";
        isValid = false;
    }

    // Validate email
    if (!emailReg.test(email)) {
        document.getElementById('emailError').textContent = "*This is not a valid email id";
        isValid = false;
    }

    // Validate password
    if (!passwordReg.test(password)) {
        document.getElementById('passwordError').textContent = "*Password must be strong and contain letters, special characters, and digits";
        isValid = false;
    }

    // Confirm password validation
    if (password !== cpassword) {
        document.getElementById('cpasswordError').textContent = "*Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        console.log('Form submitted successfully');
        // Additional logic for form submission can be added here
    }
});
