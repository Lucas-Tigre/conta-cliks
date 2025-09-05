// Aguarda o conteúdo da página ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // Pega o elemento do formulário de login pelo seu ID
    const loginForm = document.getElementById('login-form');

    // Adiciona um "ouvinte" para o evento de submissão do formulário
    loginForm.addEventListener('submit', function(event) {
        // Previne o comportamento padrão do formulário, que é recarregar a página
        event.preventDefault();

        // Pega os valores digitados nos campos de usuário e senha
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // Define as credenciais corretas.
        // O seu nome de usuário é 'lucas Guercheski' e a sua senha é '17052008'
        const correctUsername = 'lucas guercheski';
        const correctPassword = '17052008';
        const correctUsername = 'Antonio';
        const correctPassword = 'torresmo';

        // Verifica se o usuário e a senha digitados são iguais às credenciais corretas
        if (usernameInput === correctUsername && passwordInput === correctPassword) {
            // Se as credenciais estiverem corretas, redireciona para a página do jogo (game.html)
            alert('Login bem-sucedido! Redirecionando para o jogo...');
            window.location.href = 'game.html';
        } else {
            // Se as credenciais estiverem incorretas, exibe uma mensagem de erro
            alert('Usuário ou senha incorretos. tente novamente. dica: [Usuario: Antonio][Senha: Apelido carinhoso dele] ');
        }
    });
});