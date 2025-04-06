document.querySelector('.contact-btn').addEventListener('mouseover', function() {
    this.textContent = 'Let\'s Chat!';
});

document.querySelector('.contact-btn').addEventListener('mouseout', function() {
    this.textContent = 'Contact Us';
});