function validateForm() {
    let isValid = true;
    
    // Reset all error messages
    let errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    // Get all form values
    let studentName = document.getElementById('student_name').value;
    let rollNo = document.getElementById('rollno').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let year = document.getElementById('year').value;
    let department = document.getElementById('department').value;
    let section = document.getElementById('section').value;
    let mobileNo = document.getElementById('mobile_no').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;
    let pincode = document.getElementById('pincode').value;

    // Validate student name
    if (studentName.trim() === "") {
        document.getElementById('student_name_error').textContent = "Please enter your name.";
        isValid = false;
    }

    // Validate roll number
    if (rollNo.trim() === "") {
        document.getElementById('rollno_error').textContent = "Please enter your roll number.";
        isValid = false;
    }

    // Validate gender
    if (!gender) {
        document.getElementById('gender_error').textContent = "Please select your gender.";
        isValid = false;
    }

    // Validate year
    if (year === "Select Year") {
        document.getElementById('year_error').textContent = "Please select your year.";
        isValid = false;
    }

    // Validate department
    if (department.trim() === "") {
        document.getElementById('department_error').textContent = "Please enter your department.";
        isValid = false;
    }

    // Validate section
    if (section.trim() === "") {
        document.getElementById('section_error').textContent = "Please enter your section.";
        isValid = false;
    }

    // Validate mobile number
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobileNo)) {
        document.getElementById('mobile_no_error').textContent = "Please enter a valid 10-digit mobile number.";
        isValid = false;
    }

    // Validate email
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email_error').textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate address
    if (address.trim() === "") {
        document.getElementById('address_error').textContent = "Please enter your address.";
        isValid = false;
    }

    // Validate city
    if (city.trim() === "") {
        document.getElementById('city_error').textContent = "Please enter your city.";
        isValid = false;
    }

    // Validate country
    if (country === "Select Country") {
        document.getElementById('country_error').textContent = "Please select your country.";
        isValid = false;
    }

    // Validate pincode
    let pincodePattern = /^[0-9]{6}$/;
    if (!pincodePattern.test(pincode)) {
        document.getElementById('pincode_error').textContent = "Please enter a valid 6-digit pincode.";
        isValid = false;
    }

    return isValid;
}
