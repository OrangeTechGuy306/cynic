/**
 * CYNIC AGENT PORTAL - REAL-TIME CHAT SYSTEM CONTROLLER
 * Handles chat threads, active messaging, simulated student responses, and quick replies
 */

let activeChatId = 'chat-01';

function getStoredChats() {
  const stored = localStorage.getItem('cynic_chats');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
  }
  return CYNIC_DATA.chats;
}

function saveStoredChats(chats) {
  localStorage.setItem('cynic_chats', JSON.stringify(chats));
}

function initChatSystem() {
  const chats = getStoredChats();

  // Check if URL specifies a particular student/user or chat ID
  const urlParams = new URLSearchParams(window.location.search);
  const targetUser = urlParams.get('user');
  const targetChatId = urlParams.get('id');

  if (targetChatId) {
    activeChatId = targetChatId;
  } else if (targetUser) {
    const found = chats.find(c => c.user.toLowerCase() === targetUser.toLowerCase());
    if (found) {
      activeChatId = found.id;
    }
  }

  renderChatList();
  renderActiveConversation();
  setupChatInputs();
}

function renderChatList() {
  const listContainer = document.getElementById('chatListContainer');
  if (!listContainer) return;

  const chats = getStoredChats();
  listContainer.innerHTML = chats.map(c => `
    <li class="chat-item ${c.id === activeChatId ? 'active' : ''}" onclick="selectChat('${c.id}')">
      <div class="chat-item-avatar">
        ${c.userInitial}
        ${c.online ? '<span class="online-dot"></span>' : ''}
      </div>
      <div class="chat-item-content">
        <div class="chat-item-top">
          <span class="chat-item-name">${c.user}</span>
          <span class="chat-item-time">${c.lastTime}</span>
        </div>
        <div class="chat-item-sub">${c.listingTitle}</div>
        <div class="chat-item-preview">${c.lastMessage}</div>
      </div>
      ${c.unread > 0 ? `<span class="nav-badge badge-green" style="margin-left: 6px;">${c.unread}</span>` : ''}
    </li>
  `).join('');
}

function selectChat(chatId) {
  activeChatId = chatId;
  const chats = getStoredChats();
  const chat = chats.find(c => c.id === chatId);
  if (chat) {
    chat.unread = 0;
    saveStoredChats(chats);
  }

  // Handle mobile container class
  const appContainer = document.querySelector('.chat-app-container');
  if (appContainer) {
    appContainer.classList.add('in-conversation');
  }

  renderChatList();
  renderActiveConversation();
}

function backToChatList() {
  const appContainer = document.querySelector('.chat-app-container');
  if (appContainer) {
    appContainer.classList.remove('in-conversation');
  }
}

function renderActiveConversation() {
  const chats = getStoredChats();
  const currentChat = chats.find(c => c.id === activeChatId) || chats[0];
  if (!currentChat) return;

  // Header
  const headerUser = document.getElementById('activeChatUser');
  const headerListing = document.getElementById('activeChatListing');
  const headerStatus = document.getElementById('activeChatStatus');

  if (headerUser) headerUser.textContent = currentChat.user;
  if (headerListing) headerListing.textContent = currentChat.listingTitle;
  if (headerStatus) {
    headerStatus.innerHTML = currentChat.online 
      ? '<span style="color: var(--emerald-600);"><i class="ri-checkbox-blank-circle-fill" style="font-size: 8px;"></i> Online</span>' 
      : '<span style="color: var(--slate-400);">Offline</span>';
  }

  // Messages
  const messagesArea = document.getElementById('chatMessagesArea');
  if (!messagesArea) return;

  messagesArea.innerHTML = `
    <div class="chat-date-separator">
      <span>Today</span>
    </div>
    ${currentChat.messages.map(m => `
      <div class="message-bubble ${m.sender === 'agent' ? 'outgoing' : 'incoming'}">
        <div class="message-text">${m.text}</div>
        <div class="message-time">${m.time}</div>
      </div>
    `).join('')}
  `;

  // Auto scroll to bottom
  messagesArea.scrollTop = messagesArea.scrollHeight;
}

function setupChatInputs() {
  const form = document.getElementById('chatSendForm');
  const input = document.getElementById('chatMessageInput');

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;

      sendAgentMessage(text);
      input.value = '';
      input.focus();
    });
  }

  // Quick reply chips
  const chips = document.querySelectorAll('.quick-reply-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const template = chip.getAttribute('data-reply');
      if (input) {
        input.value = template;
        input.focus();
      }
    });
  });
}

function sendAgentMessage(text) {
  const chats = getStoredChats();
  const chatIndex = chats.findIndex(c => c.id === activeChatId);
  if (chatIndex === -1) return;

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const newMsg = {
    sender: 'agent',
    text: text,
    time: timeStr
  };

  chats[chatIndex].messages.push(newMsg);
  chats[chatIndex].lastMessage = text;
  chats[chatIndex].lastTime = timeStr;
  saveStoredChats(chats);

  renderActiveConversation();
  renderChatList();

  // Simulated student response after 1.5 seconds
  setTimeout(() => {
    simulateStudentReply(chatIndex);
  }, 1500);
}

function simulateStudentReply(chatIndex) {
  const chats = getStoredChats();
  const chat = chats[chatIndex];
  if (!chat) return;

  const replies = [
    "Thank you for the update agent! That sounds very good.",
    "Understood. Will call you when I arrive at the gate.",
    "Can you please send me the estate security contact as well?",
    "Great! I am sharing this with my parents right away."
  ];
  const randomReply = replies[Math.floor(Math.random() * replies.length)];
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  chat.messages.push({
    sender: 'user',
    text: randomReply,
    time: timeStr
  });
  chat.lastMessage = randomReply;
  chat.lastTime = timeStr;
  saveStoredChats(chats);

  renderActiveConversation();
  renderChatList();
  showToast(`New message from ${chat.user}`);
}
