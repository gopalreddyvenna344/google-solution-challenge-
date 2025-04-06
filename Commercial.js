document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Searching for business trash services near ' + document.getElementById('address').value);
});

document.getElementById('feedbackBtn').addEventListener('click', function() {
    window.location.href = 'feedback1.html'; // Replace with the actual feedback page URL
});