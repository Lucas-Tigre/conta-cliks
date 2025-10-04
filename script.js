let cliques = 0; // Inicializa a variável que vai contar os cliques com 0

// Pega o botão pelo ID "botao" e adiciona um ouvinte para quando ele for clicado
const clickerButton = document.getElementById("botao");
if (clickerButton) {
    clickerButton.addEventListener("click", () => {
        cliques++; // Aumenta o valor da variável "cliques" em 1
        document.getElementById("contador").textContent = cliques; // Atualiza o texto do elemento "contador" com o novo valor
    });
}

// Lógica do chat
document.addEventListener('DOMContentLoaded', () => {
  const chatIcon = document.getElementById('chat-icon');
  const chatWindow = document.getElementById('chat-window');
  const closeChat = document.getElementById('close-chat');
  const searchInput = document.getElementById('search-input');
  const conversations = document.getElementById('conversations');
  const chatMessages = document.getElementById('chat-messages');
  const backToConversations = document.getElementById('back-to-conversations');
  const currentChatUser = document.getElementById('current-chat-user');
  const messagesContainer = document.getElementById('messages-container');
  const newMessage = document.getElementById('new-message');
  const sendMessage = document.getElementById('send-message');

  // Se os elementos do chat não existirem, não continue
  if (!chatIcon || !chatWindow) return;

  // Dados de simulação
  const users = [
    { id: 1, name: 'Alice', gmail: 'alice@gmail.com' },
    { id: 2, name: 'Bob', gmail: 'bob@gmail.com' },
    { id: 3, name: 'Charlie', gmail: 'charlie@gmail.com' }
  ];

  const messages = {
    'alice@gmail.com': [
      { sender: 'other', text: 'Olá!' },
      { sender: 'me', text: 'Oi, tudo bem?' }
    ],
    'bob@gmail.com': [],
  };

  // Abrir e fechar a janela de chat
  chatIcon.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
  });

  closeChat.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
  });

  // Filtrar conversas
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    conversations.innerHTML = '';
    const filteredUsers = users.filter(user => user.gmail.toLowerCase().includes(query));

    if (filteredUsers.length > 0) {
        filteredUsers.forEach(user => {
            const div = document.createElement('div');
            div.className = 'conversation-item';
            div.textContent = user.name;
            div.dataset.gmail = user.gmail;
            conversations.appendChild(div);
        });
    } else {
        conversations.innerHTML = '<p style="text-align: center; color: #888; font-family: sans-serif; padding-top: 10px;">Nenhum usuário encontrado.</p>';
    }
  });

  // Abrir uma conversa
  conversations.addEventListener('click', (e) => {
    if (e.target.classList.contains('conversation-item')) {
      const gmail = e.target.dataset.gmail;
      const user = users.find(u => u.gmail === gmail);
      currentChatUser.textContent = user.name;
      chatMessages.dataset.currentUser = gmail;

      messagesContainer.innerHTML = '';
      if (messages[gmail]) {
        messages[gmail].forEach(msg => {
          const msgDiv = document.createElement('div');
          msgDiv.className = `message ${msg.sender === 'me' ? 'sent' : 'received'}`;
          msgDiv.textContent = msg.text;
          messagesContainer.appendChild(msgDiv);
        });
      }

      chatMessages.classList.add('visible');
    }
  });

  // Voltar para a lista de conversas
  backToConversations.addEventListener('click', () => {
    chatMessages.classList.remove('visible');
  });

  // Enviar mensagem
  const sendNewMessage = () => {
    const text = newMessage.value.trim();
    if (text) {
      const gmail = chatMessages.dataset.currentUser;

      const msgDiv = document.createElement('div');
      msgDiv.className = 'message sent';
      msgDiv.textContent = text;
      messagesContainer.appendChild(msgDiv);

      if (!messages[gmail]) {
        messages[gmail] = [];
      }
      messages[gmail].push({ sender: 'me', text });

      newMessage.value = '';
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  };

  sendMessage.addEventListener('click', sendNewMessage);
  newMessage.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          sendNewMessage();
      }
  });

  // Carregar conversas iniciais
  searchInput.dispatchEvent(new Event('input'));
});