import React, { useState } from 'react';
import '../Chatbot/Chatbot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(null);

  const options = [
    { text: 'Contact info', reply: 'My Email : rohithsai352@gmail.com' },
    { text: 'Project live links', reply: 'Personal-Blog : https://rs-public-blog.onrender.com/' },
    { text: 'Rate the website', reply: 'Please select a rating from 1 to 5 below:' },
  ];

  const handleOptionClick = (option) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: option.text },
      { sender: 'bot', text: option.reply },
    ]);
  };

  const handleRating = (value) => {
    setRating(value);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: `Rating: ${value}` },
      { sender: 'bot', text: `Thank you for the feedback!` },
    ]);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <button className="chat-toggle" onClick={toggleChat}>
        {isOpen ? 'Close' : 'Chat Support'}
      </button>

      {isOpen && (
        <div className="chatbox">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.sender === 'bot' ? 'bot' : 'user'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-options">
            {options.map((option, index) => (
              <button
                key={index}
                className="chat-option"
                onClick={() => handleOptionClick(option)}
              >
                {option.text}
              </button>
            ))}
          </div>
          {messages.some((msg) => msg.text === 'Rate the website') && (
            <div className="chat-rating">
              {[1, 2, 3, 4, 5].map((value) => (
                <button 
                  key={value}
                  className="chat-rating-control"
                  onClick={() => handleRating(value)}
                  disabled={rating !== null}
                >
                  {value}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;