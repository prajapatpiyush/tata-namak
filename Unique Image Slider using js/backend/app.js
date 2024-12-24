/*
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Collecting form data
    const name = document.getElementById('name1').value;
    const email = document.getElementById('email1').value;
    const password = document.getElementById('pass1').value;
    const gender = document.getElementById('gender1').value;
    const city = document.getElementById('city1').value;

    // Send data to the backend (your servlet)
    fetch('http://localhost:8080/RegisterLogin/regForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name1=${name}&email1=${email}&pass1=${password}&gender1=${gender}&city1=${city}`,
    })
    .then(response => response.text())
    .then(message => {
        // Display the message returned by the backend (success or error)
        document.getElementById('response-message').innerHTML = message;
    })
    .catch(err => {
        console.error(err);
    });
});*/
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Collecting form data
    const name = document.getElementById('name1').value.trim();
    const email = document.getElementById('email1').value.trim();
    const password = document.getElementById('pass1').value.trim();
    const gender = document.getElementById('gender1').value.trim();
    const city = document.getElementById('city1').value.trim();

    // Validate form input
    if (!name || !email || !password || !gender || !city) {
        displayMessage('All fields are required!', 'red');
        return;
    }

    // Send data to the backend
    fetch('http://localhost:8080/RegisterLogin/regForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name1=${name}&email1=${email}&pass1=${password}&gender1=${gender}&city1=${city}`,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(message => {
            if (message.toLowerCase().includes('success')) {
                displayMessage('You are registered!', 'green');
                document.getElementById('signup-form').reset(); // Reset form on success
            } else {
                displayMessage(message || 'Registration failed. Please try again.', 'red');
            }
        })
        .catch(err => {
            console.error('Fetch error:', err);
            displayMessage(`An error occurred: ${err.message}`, 'red');
        });
});

// Utility function to display response messages
function displayMessage(message, color) {
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = message;
    responseMessage.style.color = color;
}
