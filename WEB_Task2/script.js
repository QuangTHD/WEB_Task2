const details = {
    HTML: 'Learn how to create the structure of web pages using headings, paragraphs, images, and links.',
    CSS: 'Learn how to style web pages with colors, fonts, spacing, and attractive layouts.',
    Bootstrap: 'Bootstrap is a front-end framework for building responsive, mobile-friendly websites with ready-made components.',
    JavaScript: 'JavaScript makes web pages interactive using events, form validation, and dynamic content.'
};
document.querySelectorAll('[data-course]').forEach(button => button.addEventListener('click', () => {
    document.getElementById('modalBody').textContent = button.dataset.course + ': ' + details[button.dataset.course];
}));
const toggle = document.getElementById('togglePassword');
if (toggle) toggle.addEventListener('click', () => {
    const input = document.getElementById('password');
    input.type = input.type === 'password' ? 'text' : 'password';
    toggle.textContent = input.type === 'password' ? 'Show' : 'Hide';
});
const forgot = document.getElementById('forgot');
if (forgot) forgot.addEventListener('click', e => {
    e.preventDefault();
    alert('Unfortunately it is unavailable');
});
const login = document.getElementById('loginForm');
if (login) {
    login.addEventListener('submit', e => {
        e.preventDefault();
        alert('Login successful!');
        window.location.href = 'courses.html';
    });
}
const signup = document.getElementById('signupForm');
if (signup) {
    signup.addEventListener('submit', e => {
        e.preventDefault();
        const password = document.getElementById('password').value;
        const confirm = document.getElementById('confirm').value;
        if (password !== confirm) {
            alert('Passwords do not match!');
            return;
        }
        alert('Sign Up successful!');
        window.location.href = 'courses.html';
    });
}
