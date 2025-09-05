document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // Credenciais corretas
        const correctUsername = 'lucas Guercheski';
        const correctPassword = '17052008';

        if (usernameInput === correctUsername && passwordInput === correctPassword) {
            alert('Login bem-sucedido!');
            // Opcional: redirecionar para outra página após o login
            // window.location.href = 'pagina_principal.html';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});
