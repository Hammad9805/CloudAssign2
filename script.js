function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple validation to ensure all required fields are filled out
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all required fields.');
        return;
    }

    // Additional validation for the email format (you can customize this based on your requirements)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Example: Send the form data to a server (you would need server-side code for this)
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Clear the form after successful submission (optional)
    document.getElementById('contactForm').reset();
}
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}