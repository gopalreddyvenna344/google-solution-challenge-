document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for demonstration

    // Example: Simple validation
    let fullName = document.getElementById('full-name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (fullName && email && message) {
        alert('Thank you for getting in touch! We will get back to you soon.');
        // Here you could send the data to the server using fetch or XMLHttpRequest
    } else {
        alert('Please fill out all required fields.');
    }
});
