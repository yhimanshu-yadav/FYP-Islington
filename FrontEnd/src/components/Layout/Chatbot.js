// Chatbot.js

import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="chatbot">
<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
<df-messenger
  intent="WELCOME"
  chat-title="BiteBuddy"
  agent-id="a9f0e2e6-cdf4-41ae-9421-fa8452e235e0"
  language-code="en"
></df-messenger>
    </div>
  );
};

export default Chatbot;
