document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('box');
    const userInput = document.getElementById('input');
    const sendBtn = document.getElementById('send');
    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    function getBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();

        if (userMessage.includes('hello') || userMessage.includes('hi')) {
            return "🤖 Hello there! How can I help you today?";
        } else if (userMessage.includes('how are you')) {
            return "🤖 fine ";
        } else if (userMessage.includes('name')) {
            return "🤖 I am a VRS The chatbot. You can call me Chatty!";
        } else if (userMessage.includes('help')) {
            return "🤖 I can answer basic questions";
        } else if (userMessage.includes('bye') || userMessage.includes('goodbye')) {
            return "Goodbye!";
        } else if (userMessage.includes('weather')) {
            return "🤖 I don't understand.";
        } else if (userMessage.includes('time')) {
            const now = new Date();
            return `🤖 The current time is ${now.toLocaleTimeString()}.`;
        } else if (userMessage.includes('vrs')) {
            return "🤖  The VRS means the  creaters of chatbot VRS.The creaters are Vilbin,Ram Sujith,Shajen";
        }
        else {
            return "🤖 I don't understand that";
        }
    }
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        appendMessage('user', message);
        userInput.value = '';
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            appendMessage('bot', botResponse);
        }, 500);
    }
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
    appendMessage('bot', "🤖 Hi there! I'm VRS The chatbot. How can I help you?");
});