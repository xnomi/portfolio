import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import './Chatbot.css';

const QUICK_PROMPTS = [
  '⚡ What services do you offer for businesses & startups?',
  '🤖 Can you build custom AI Agents or n8n automations?',
  '🚀 How do we start a project & what is your timeline?',
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! I am **Noman Ashraf\'s AI Solutions Assistant**. Looking to build a web/mobile app, automate workflows with **n8n**, or deploy **custom AI agents**? Ask me about my services, past builds, or share your project idea!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input when opened on non-touch devices
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 150);
      }
    }
  }, [messages, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const sendQuery = async (queryText) => {
    if (!queryText.trim() || isLoading) return;

    const userMessage = { role: 'user', content: queryText.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiMessages = [...messages, userMessage].map(({ role, content }) => ({ role, content }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I am having trouble connecting right now. Please reach out directly via [Email](mailto:nomi.devx@gmail.com) or [WhatsApp](https://wa.me/923319025470?text=Hi%20Noman%2C%20I%20visited%20your%20portfolio%20and%20have%20a%20question.)!' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendQuery(input);
  };

  return (
    <div className={`chatbot-container${isOpen ? ' open' : ''}`}>
      {!isOpen && (
        <button
          className="chatbot-toggle-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI chat assistant"
          title="Chat with Noman's AI Assistant"
        >
          <FaRobot />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window" role="dialog" aria-label="AI Chatbot Assistant">
          <div className="chatbot-header">
            <h3><FaRobot /> Chat with Noman (AI)</h3>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat window"
              title="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                {msg.role === 'assistant' ? (
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                ) : (
                  msg.content
                )}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="chatbot-chips">
                {QUICK_PROMPTS.map((prompt, i) => (
                  <button
                    key={i}
                    className="chatbot-chip-btn"
                    onClick={() => sendQuery(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="message-loading">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, timelines, or your project..."
              disabled={isLoading}
              aria-label="Your question"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
            >
              <FaPaperPlane size={13} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
