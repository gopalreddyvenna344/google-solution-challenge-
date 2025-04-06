document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;
    
    // Display feedback in console (you can handle it differently)
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Feedback: ${feedback}`);
    
    alert("Thank you for your feedback!");

    // Optionally, reset the form after submission
    this.reset();
});
