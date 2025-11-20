// ChatBot JavaScript -->
  
    // Chat Bot Configuration
    const chatbotConfig = {
      welcomeMessage: "سلام! 👋\n\nبه پشتیبانی شرکت آوادان خوش آمدید. من اینجا هستم تا به سوالات شما درباره خدمات هوش مصنوعی، دوره‌های آموزشی و محصولات ما پاسخ دهم.\n\nچطور می‌توانم کمکتان کنم؟",
      quickReplies: [
        "درباره خدمات",
        "دوره‌های آموزشی",
        "قیمت‌ها",
        "تماس با ما"
      ]
    };

    // Chat Bot State
    let isChatOpen = false;
    let isTyping = false;

    // DOM Elements
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotNotification = document.getElementById('chatbot-notification');

    // Initialize Chat Bot
    function initChatbot() {
      // Show welcome message after a short delay
      setTimeout(() => {
        addBotMessage(chatbotConfig.welcomeMessage, true);
      }, 500);
    }

    // Toggle Chat Window
    chatbotToggle.addEventListener('click', () => {
      isChatOpen = !isChatOpen;
      if (isChatOpen) {
        chatbotWindow.classList.add('active');
        chatbotNotification.style.display = 'none';
        chatbotInput.focus();
      } else {
        chatbotWindow.classList.remove('active');
      }
    });

    chatbotClose.addEventListener('click', () => {
      isChatOpen = false;
      chatbotWindow.classList.remove('active');
    });

    // Add Message to Chat
    function addMessage(text, isUser = false, showQuickReplies = false) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
      
      const bubble = document.createElement('div');
      bubble.className = 'message-bubble';
      bubble.textContent = text;
      
      const time = document.createElement('div');
      time.className = 'message-time';
      const now = new Date();
      time.textContent = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      messageDiv.appendChild(bubble);
      messageDiv.appendChild(time);
      
      if (showQuickReplies && !isUser) {
        const quickRepliesDiv = document.createElement('div');
        quickRepliesDiv.className = 'quick-replies';
        chatbotConfig.quickReplies.forEach(reply => {
          const btn = document.createElement('button');
          btn.className = 'quick-reply-btn';
          btn.textContent = reply;
          btn.addEventListener('click', () => {
            handleQuickReply(reply);
          });
          quickRepliesDiv.appendChild(btn);
        });
        messageDiv.appendChild(quickRepliesDiv);
      }
      
      chatbotMessages.appendChild(messageDiv);
      scrollToBottom();
    }

    // Add Bot Message with Typing Indicator
    function addBotMessage(text, showQuickReplies = false) {
      if (isTyping) return;
      
      // Show typing indicator
      showTypingIndicator();
      isTyping = true;
      
      setTimeout(() => {
        hideTypingIndicator();
        addMessage(text, false, showQuickReplies);
        isTyping = false;
      }, 1000 + Math.random() * 1000);
    }

    // Show Typing Indicator
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

    // Hide Typing Indicator
    function hideTypingIndicator() {
      const indicator = document.getElementById('typing-indicator');
      if (indicator) {
        indicator.remove();
      }
    }

    // Handle User Message
    function handleUserMessage(message) {
      if (!message.trim()) return;
      
      addMessage(message, true);
      chatbotInput.value = '';
      
      // Generate bot response
      setTimeout(() => {
        const response = generateBotResponse(message);
        addBotMessage(response, true);
      }, 500);
    }

    // Generate Bot Response based on user message
    function generateBotResponse(userMessage) {
      const message = userMessage.toLowerCase();
      
      // Greetings
      if (message.includes('سلام') || message.includes('درود') || message.includes('hello') || message.includes('hi')) {
        return "سلام! خوش آمدید. چطور می‌توانم کمکتان کنم؟";
      }
      
      // Services
      if (message.includes('خدمات') || message.includes('سرویس') || message.includes('خدمت')) {
        return "شرکت آوادان خدمات زیر را ارائه می‌دهد:\n\n" +
               "🤖 مدل دستیار هوش مصنوعی\n" +
               "📚 دوره‌های آموزشی هوش مصنوعی\n" +
               "🔬 سنسور اپتیکی هوشمند\n" +
               "🏭 دستگاه تست مقاومت مواد\n" +
               "💻 نرم‌افزار استخراج فاز لیزری\n\n" +
               "برای اطلاعات بیشتر می‌توانید به بخش خدمات در سایت مراجعه کنید یا فرم تماس را پر کنید.";
      }
      
      // Education/Courses
      if (message.includes('دوره') || message.includes('آموزش') || message.includes('کلاس') || message.includes('course')) {
        return "ما دوره‌های تخصصی در زمینه‌های زیر برگزار می‌کنیم:\n\n" +
               "• یادگیری عمیق (Deep Learning)\n" +
               "• شبکه‌های عصبی\n" +
               "• کاربردهای صنعتی هوش مصنوعی\n" +
               "• کنترل هوشمند فرآیندهای صنعتی\n\n" +
               "برای ثبت‌نام یا دریافت اطلاعات بیشتر، لطفاً فرم تماس را پر کنید.";
      }
      
      // Price
      if (message.includes('قیمت') || message.includes('هزینه') || message.includes('پول') || message.includes('price') || message.includes('cost')) {
        return "قیمت‌گذاری خدمات ما بر اساس نیازهای خاص هر پروژه انجام می‌شود. برای دریافت قیمت دقیق و مشاوره رایگان، لطفاً:\n\n" +
               "1️⃣ فرم تماس را پر کنید\n" +
               "2️⃣ یا با ایمیل info@avadan-co.ir تماس بگیرید\n\n" +
               "کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.";
      }
      
      // Contact
      if (message.includes('تماس') || message.includes('ارتباط') || message.includes('contact') || message.includes('phone') || message.includes('ایمیل')) {
        return "راه‌های ارتباط با ما:\n\n" +
               "📧 ایمیل: info@avadan-co.ir\n" +
               "📍 آدرس: زنجان، دانشگاه تحصیلات تکمیلی علوم پایه\n" +
               "📝 فرم تماس: می‌توانید از بخش تماس در سایت استفاده کنید\n\n" +
               "📞📱09123411691";
      }
      
      // About Company
      if (message.includes('درباره') || message.includes('شرکت') || message.includes('آوادان') || message.includes('about') || message.includes('company')) {
        return "شرکت علم و صنعت معدن آوادان پیشرو در ارائه خدمات هوش مصنوعی صنعتی است.\n\n" +
               "✅ ۲۵ سال سابقه در پروژه‌های صنعتی\n" +
               "✅ ۲۰ سال تجربه در تولید نرم‌افزار\n" +
               "✅ ۷ سال تحقیق و توسعه در هوش مصنوعی\n\n" +
               "تیم ما شامل فارغ‌التحصیلان دانشگاه‌های برتر کشور است.";
      }
      
      // AI Assistant
      if (message.includes('هوش مصنوعی') || message.includes('دستیار') || message.includes('ai') || message.includes('assistant')) {
        return "مدل دستیار هوش مصنوعی ما:\n\n" +
               "🤖 با دریافت پارامترهای خط تولید، پارامترهای بهینه را پیشنهاد می‌دهد\n" +
               "📊 بر اساس داده‌های تاریخی و یادگیری عمیق کار می‌کند\n" +
               "📱 در قالب اپلیکیشن موبایل یا سایت ارائه می‌شود\n\n" +
               "برای مشاهده دمو: avadan-co.ir/qminer3/";
      }
      
      // Default response
      return "متشکرم از سوال شما. برای دریافت اطلاعات دقیق‌تر درباره:\n\n" +
             "• خدمات و محصولات\n" +
             "• دوره‌های آموزشی\n" +
             "• قیمت‌ها و مشاوره\n\n" +
             "لطفاً فرم تماس را پر کنید یا با ایمیل info@avadan-co.ir تماس بگیرید.\n\n" +
             "کارشناسان ما آماده پاسخگویی به شما هستند! 😊";
    }

    // Handle Quick Reply
    function handleQuickReply(reply) {
      addMessage(reply, true);
      setTimeout(() => {
        const response = generateBotResponse(reply);
        addBotMessage(response, true);
      }, 500);
    }

    // Send Message on Button Click
    chatbotSend.addEventListener('click', () => {
      handleUserMessage(chatbotInput.value);
    });

    // Send Message on Enter Key
    chatbotInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserMessage(chatbotInput.value);
      }
    });

    // Scroll to Bottom
    function scrollToBottom() {
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Show notification badge when chat is closed
    function showNotification() {
      if (!isChatOpen) {
        chatbotNotification.style.display = 'flex';
      }
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', () => {
      initChatbot();
      // Show notification after 3 seconds if chat is not opened
      setTimeout(() => {
        if (!isChatOpen) {
          showNotification();
        }
      }, 3000);
    });
  