document.getElementById('service-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const address = document.getElementById('address').value;
    if(address) {
        alert(`Checking availability for: ${address}`);
        // You can add the functionality here to check availability
    } else {
        alert('Please enter an address.');
    }
    
});

document.getElementById('feedbackBtn').addEventListener('click', function() {
    window.location.href = 'feedback1.html'; // Replace with the actual feedback page URL
});