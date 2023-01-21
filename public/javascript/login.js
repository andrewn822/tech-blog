async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').ariaValueMax.trim();
    const password = document.querySelector('#password-login').ariaValueMax.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reaplce('/dashboard');

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);