document.querySelector('.login-form input[type=submit]')
    .addEventListener('click', login);

function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            username: document.querySelector('.login-form input[name=username]').value,
            surname: document.querySelector('.login-form input[name=surname]').value,
            mail: document.querySelector('.login-form input[name=mail]').value,
            password: document.querySelector('.login-form input[name=pass]').value,
            // phone: document.querySelector('.login-form input[name=phone]').value,
            // gender: document.querySelector('.login-form input[name=gender]').value,
        })
    })
        .then(_ => document.querySelector('.login-form').reset());
}
