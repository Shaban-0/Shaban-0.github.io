/*  JavaScript for the contact page. This script will:
    o Check that both email fields match before submitting the form. If they do not match, the form displays an error message.
    o Check that the date selected for the lesson is in the future. If it is not, the form displays an error message.
    o Validates the form, and displays an alert message with the form data, when the form is submitted.
*/
let form = document.querySelector("form");

function validateForm() {
    
    if (form.checkValidity()) {
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let phone = document.querySelector("#phone").value;
        let contactMethod = document.querySelector("#contactMethod").value;
        let lessonDate = document.querySelector("#lessonDate").value;

        let formSubmission = 
            
        'Your Private Lesson Has Been Booked! \n' +
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Phone: ' + phone + '\n' +
        'Preferred Contact Method: ' + contactMethod + '\n' +
        'Lesson Date: ' + lessonDate + '\n';

        alert(formSubmission);
    }
    
    return false;
}

function checkEmails() {
    let email = document.querySelector("#email").value;
    let confirmEmail = document.querySelector("#confirmEmail").value;

    if (email !== confirmEmail) {
        document.querySelector("#confirmEmail").setCustomValidity("Emails do not match. Please check and try again.");

    } else {
        document.querySelector("#confirmEmail").setCustomValidity("");
    }
}

function checkDate() {
    let lessonDate = document.querySelector("#lessonDate").value;
    let today = new Date();
    let todayCheck = today.getFullYear() + "-" + (today.getMonth() + 1).toString().padStart(2, '0') + "-" + today.getDate();
    console.log(todayCheck);
    console.log(lessonDate);

    if (lessonDate <= todayCheck) {
        document.querySelector("#lessonDate").setCustomValidity("Please select a future date for a lesson.");
        
    } else {
        document.querySelector("#lessonDate").setCustomValidity("");
    }
}


