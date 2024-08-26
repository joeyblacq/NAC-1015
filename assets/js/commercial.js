// code copied and not straighten out for commercial.js
const form = document.querySelector("form");
const successAlert = document.getElementById("alert_success");
const failedAlert = document.getElementById("alert_failed");
const submitButton = document.getElementById("submit-button");
const modal = document.getElementsByClassName("modal");
const closebutton = document.getElementById("test");
const messagesent = document.getElementById('message-sent');





                      // form submission handler

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Simulate form validation (replace with actual validation logic)
  if (validateForm()) {
    // If validation passes, submit the form using AJAX
    // ... your AJAX code to submit the form ...

    // Display success alert and disable submit button
    modal[0].style.display = "block";

    submitButton.disabled = true;
   
  } else {
    // If validation fails, display failed alert
    failedAlert.style.display = "block";
  }
});

                        //  close button click handler

closebutton.addEventListener("click", (event) => {
  // event.preventDefault(); // Prevent default form submission
  console.log('imani')

  // Simulate form validation (replace with actual validation logic)
  // if (messagesent) {
    // If validation passes, submit the form using AJAX
    // ... your AJAX code to submit the form ...

    // Hide the modal
    modal[0].style.display = "none";

    // Re-enable submit button
    submitButton.disabled = false;

  // } else {
  //   // If validation succeed, display message sent
  //   messagesent.style.display = "block";
  // }
});

// Function to validate the form (replace with your actual validation logic)
function validateForm() {
  // ... your validation logic here ...
  return true ; // Replace with appropriate validation result
}

