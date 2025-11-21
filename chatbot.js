// Multilingual ChatBot logic

const quickReplyConfig = [
  { intent: 'services', labelKey: 'chatbot.quickReplies.services' },
  { intent: 'courses', labelKey: 'chatbot.quickReplies.courses' },
  { intent: 'pricing', labelKey: 'chatbot.quickReplies.pricing' },
  { intent: 'contact', labelKey: 'chatbot.quickReplies.contact' }
];

const chatbotResponseKeys = [
  'greeting',
  'services',
  'courses',
  'pricing',
  'contact',
  'about',
  'ai',
  'default'
];

const chatbotIntentMatchers = [
  {
    intent: 'greeting',
    keywords: ['سلام', 'درود', 'hello', 'hi', 'hey', 'merhaba', 'selam']
  },
  {
    intent: 'services',
    keywords: ['خدمات', 'service', 'services', 'hizmet', 'servis']
  },
  {
    intent: 'courses',
    keywords: ['دوره', 'آموزش', 'course', 'training', 'education', 'ders', 'eğitim', 'egitim']
  },
  {
    intent: 'pricing',
    keywords: ['قیمت', 'هزینه', 'price', 'cost', 'fiyat', 'ücret', 'budget']
  },
  {
    intent: 'contact',
    keywords: ['تماس', 'ارتباط', 'contact', 'phone', 'email', 'iletişim', 'iletisim', 'telefon', 'mail']
  },
  {
    intent: 'about',
    keywords: ['درباره', 'شرکت', 'آوادان', 'about', 'company', 'hakkında', 'hakkinda', 'avadan']
  },
  {
    intent: 'ai',
    keywords: ['هوش مصنوعی', 'دستیار', 'ai', 'assistant', 'yapay', 'zeka', 'asistan']
  }
];

const getCurrentLang = () =>
  window.currentLanguage || localStorage.getItem('siteLang') || 'fa';

const getTranslationSafe = (lang, key) => {
  if (typeof window.getTranslation === 'function') {
    return window.getTranslation(lang, key);
  }
  return (
    window.translations?.[lang]?.[key] ??
    window.translations?.fa?.[key] ??
    ''
  );
};

const buildChatbotLocale = () => {
  const lang = getCurrentLang();
  const t = (key) => getTranslationSafe(lang, key);

  const quickReplies = quickReplyConfig.map((item) => ({
    intent: item.intent,
    label: t(item.labelKey) || item.intent
  }));

  const responses = chatbotResponseKeys.reduce((acc, key) => {
    acc[key] = t(`chatbot.responses.${key}`) || '';
    return acc;
  }, {});

  return {
    lang,
    welcomeMessage: t('chatbot.welcome') || '',
    quickReplies,
    responses
  };
};

let chatbotLocale = buildChatbotLocale();
let isChatOpen = false;
let isTyping = false;

const getResponseByIntent = (intent) =>
  chatbotLocale.responses[intent] ||
  chatbotLocale.responses.default ||
  chatbotLocale.responses.greeting ||
  '';

const detectIntent = (message) => {
  const normalized = `${message.toLowerCase()} ${message.toLocaleLowerCase('tr')}`;
  return (
    chatbotIntentMatchers.find((matcher) =>
      matcher.keywords.some((keyword) => normalized.includes(keyword))
    )?.intent || null
  );
};

// DOM Elements
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotNotification = document.getElementById('chatbot-notification');

const elementsReady =
  chatbotToggle &&
  chatbotWindow &&
  chatbotClose &&
  chatbotMessages &&
  chatbotInput &&
  chatbotSend &&
  chatbotNotification;

function addMessage(text, isUser = false, showQuickReplies = false, quickReplies = []) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;

  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  bubble.textContent = text;

  const time = document.createElement('div');
  time.className = 'message-time';
  const now = new Date();
  time.textContent = `${now.getHours().toString().padStart(2, '0')}:${now
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  messageDiv.appendChild(bubble);
  messageDiv.appendChild(time);

  if (showQuickReplies && !isUser && quickReplies.length) {
    const quickRepliesDiv = document.createElement('div');
    quickRepliesDiv.className = 'quick-replies';
    quickReplies.forEach((reply) => {
      const btn = document.createElement('button');
      btn.className = 'quick-reply-btn';
      btn.type = 'button';
      btn.textContent = reply.label;
      btn.dataset.intent = reply.intent;
      btn.addEventListener('click', () => handleQuickReply(reply));
      quickRepliesDiv.appendChild(btn);
    });
    messageDiv.appendChild(quickRepliesDiv);
  }

  chatbotMessages.appendChild(messageDiv);
  scrollToBottom();
}

function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message bot';
  typingDiv.id = 'typing-indicator';
  typingDiv.innerHTML = `
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  chatbotMessages.appendChild(typingDiv);
  scrollToBottom();
}

function hideTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) indicator.remove();
}

function addBotMessage(text, showQuickReplies = false) {
  if (isTyping || !text) return;

  showTypingIndicator();
  isTyping = true;

  setTimeout(() => {
    hideTypingIndicator();
    addMessage(text, false, showQuickReplies, chatbotLocale.quickReplies);
    isTyping = false;
  }, 800 + Math.random() * 800);
}

function handleUserMessage(message) {
  if (!message.trim()) return;

  addMessage(message, true);
  chatbotInput.value = '';

  setTimeout(() => {
    const response = generateBotResponse(message);
    addBotMessage(response, true);
  }, 400);
}

function handleQuickReply(reply) {
  addMessage(reply.label, true);
  setTimeout(() => {
    addBotMessage(getResponseByIntent(reply.intent), true);
  }, 300);
}

function generateBotResponse(userMessage) {
  const intent = detectIntent(userMessage);
  return getResponseByIntent(intent);
}

function scrollToBottom() {
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function showNotification() {
  if (!isChatOpen) {
    chatbotNotification.style.display = 'flex';
  }
}

function hideNotification() {
  chatbotNotification.style.display = 'none';
}

function initChatbot() {
  setTimeout(() => {
    addBotMessage(chatbotLocale.welcomeMessage, true);
  }, 500);
}

if (elementsReady) {
  chatbotToggle.addEventListener('click', () => {
    isChatOpen = !isChatOpen;
    if (isChatOpen) {
      chatbotWindow.classList.add('active');
      hideNotification();
      chatbotInput.focus();
    } else {
      chatbotWindow.classList.remove('active');
    }
  });

  chatbotClose.addEventListener('click', () => {
    isChatOpen = false;
    chatbotWindow.classList.remove('active');
  });

  chatbotSend.addEventListener('click', () => {
    handleUserMessage(chatbotInput.value);
  });

  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleUserMessage(chatbotInput.value);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    initChatbot();
    setTimeout(() => {
      if (!isChatOpen) {
        showNotification();
      }
    }, 3000);
  });

  document.addEventListener('languagechange', () => {
    chatbotLocale = buildChatbotLocale();
    if (isChatOpen) {
      addBotMessage(chatbotLocale.welcomeMessage, true);
    }
  });
}
