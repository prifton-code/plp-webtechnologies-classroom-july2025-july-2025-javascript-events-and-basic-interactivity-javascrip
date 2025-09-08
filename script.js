// Part 1: JavaScript Event Handling

// Hover event example
const hoverButton = document.getElementById('hover-button');
const hoverMessage = document.getElementById('hover-message');

hoverButton.addEventListener('mouseover', function() {
    hoverMessage.style.display = 'block';
});

hoverButton.addEventListener('mouseout', function() {
    hoverMessage.style.display = 'none';
});

hoverButton.addEventListener('click', function() {
    alert('Button clicked!');
});

// Keyboard input event example
const keyboardInput = document.getElementById('keyboard-input');
const typedText = document.getElementById('typed-text');

keyboardInput.addEventListener('input', function() {
    typedText.textContent = this.value;
});

// Part 2: Interactive Elements

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Toggle Light Mode';
    } else {
        themeToggle.textContent = 'Toggle Dark Mode';
    }
});

// Counter functionality
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let count = 0;

incrementButton.addEventListener('click', function() {
    count++;
    countElement.textContent = count;
});

decrementButton.addEventListener('click', function() {
    count--;
    countElement.textContent = count;
});

// FAQ accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('span:last-child');
        
        // Toggle the open class on the answer
        answer.classList.toggle('open');
        
        // Change the icon
        if (answer.classList.contains('open')) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});

// Part 3: Form Validation
const form = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const successMessage = document.getElementById('success-message');

// Validate name field
nameInput.addEventListener('input', function() {
    if (this.value.length >= 2) {
        nameError.style.display = 'none';
    }
});

// Validate email field
emailInput.addEventListener('input', function() {
    if (isValidEmail(this.value)) {
        emailError.style.display = 'none';
    }
});

// Validate password field
passwordInput.addEventListener('input', function() {
    if (this.value.length >= 6) {
        passwordError.style.display = 'none';
    }
});

// Form submission handler
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // Validate name
    if (nameInput.value.length < 2) {
        nameError.style.display = 'block';
        isValid = false;
    }
    
    // Validate email
    if (!isValidEmail(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
    }
    
    // Validate password
    if (passwordInput.value.length < 6) {
        passwordError.style.display = 'block';
        isValid = false;
    }
    
    // If form is valid, show success message
    if (isValid) {
        successMessage.style.display = 'block';
        
        // Reset form after 2 seconds
        setTimeout(() => {
            form.reset();
            successMessage.style.display = 'none';
            typedText.textContent = ''; // Also clear the typed text display
        }, 2000);
    }
});

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
