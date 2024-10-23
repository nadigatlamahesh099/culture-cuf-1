let formSubmit = document.getElementById('contactForm');

formSubmit.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    console.log(name, email, message);
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('contactForm').reset();
});