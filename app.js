// 获取HTML元素
const chatBody = document.getElementById('chat-body');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// 发送消息并显示在聊天框中
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// 发送消息函数
function sendMessage() {
  const userMessage = messageInput.value.trim();
  if (userMessage === '') return;

  // 显示用户消息
  displayMessage(userMessage, 'user');
  messageInput.value = '';  // 清空输入框

  // 模拟机器人回复
  setTimeout(() => {
    const botResponse = generateBotResponse(userMessage);
    displayMessage(botResponse, 'bot');
  }, 1000);
}

// 显示消息函数
function displayMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = message;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;  // 自动滚动到底部
}

// 简单机器人回复逻辑
function generateBotResponse(userMessage) {
  const responses = {
    'hello': 'Hi there! How can I help you?',
    'how are you': 'I am just a bot, but I am doing great!',
    'bye': 'Goodbye! Have a great day!'
  };
  return responses[userMessage.toLowerCase()] || "I'm not sure how to respond to that.";
}
