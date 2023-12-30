// ChatbotComponent.js

import React, { useEffect } from 'react';

const ChatbotComponent = () => {
  useEffect(() => {
    // Load Chatbase embed script
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.chatbotId = 'CfC0nSwENGbCJEyB_flt_';
    script.domain = 'www.chatbase.co';
    script.defer = true;

    // Append the script to the body
   document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="chatbot-container"></div>; // You can customize the container ID
};

export default ChatbotComponent;