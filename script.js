// script.js

document.getElementById('send-button').addEventListener('click', sendMessage);

document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();

    if (messageText !== '') {
        addMessage('user', messageText);
        userInput.value = '';

        // Simulate a bot response
        setTimeout(function() {
            addMessage('bot', "I'm a simple bot. I don’t have real responses yet!");
        }, 500);
    }
}

function addMessage(sender, text) {
    const chatHistory = document.getElementById('chat-history');
    const messageElement = document.createElement('div');
    const avatarElement = document.createElement('img');
    const messageContentElement = document.createElement('div');

    messageElement.classList.add('chat-message');
    avatarElement.classList.add('avatar');
    messageContentElement.classList.add('message-content');

    messageContentElement.textContent = text;

    if (sender === 'user') {
        messageElement.classList.add('user-message');
        avatarElement.src = 'https://easydrawingguides.com/wp-content/uploads/2017/05/how-to-draw-a-boy-featured-image-1200-1-466x1024.png';  // Path to user avatar image
        avatarElement.alt = 'User Avatar';
    } else if (sender === 'bot') {
        messageElement.classList.add('bot-message');
        avatarElement.src = 'https://img.rolandberger.com/content_assets/content_images/captions/Roland_Berger-24_2195_Humanoid_robots-IT_image_caption_none.jpg';  // Path to bot avatar image
        avatarElement.alt = 'Bot Avatar';
    }

    messageElement.appendChild(avatarElement);
    messageElement.appendChild(messageContentElement);
    chatHistory.appendChild(messageElement);

    // Scroll to the bottom of the chat history
    chatHistory.scrollTop = chatHistory.scrollHeight;
}
function showMessage(messageElement) {
    messageElement.classList.add('chat-message');
}

function handleNewMessage(messageText) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message-content';
    messageElement.textContent = messageText;
    const messageWrapper = document.createElement('div');
    messageWrapper.className = 'chat-message-wrapper';
    messageWrapper.appendChild(messageElement);
    document.querySelector('.chat-history').appendChild(messageWrapper);
    
    requestAnimationFrame(() => {
        showMessage(messageWrapper);
    });
}

