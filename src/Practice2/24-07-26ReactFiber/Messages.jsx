import { useState } from "react";

function ChatApp() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Simulate many messages
  const bigMessageList = Array.from(
    { length: 10000 },
    (_, i) => `Message ${i}`
  );

  return (
    <div>
      <input
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <h3>Your message:</h3>
      <p>{message}</p>

      <h3>Messages:</h3>

      {bigMessageList.map((msg) => (
        <div key={msg}>
          {msg}
        </div>
      ))}
    </div>
  );
}

export default ChatApp;