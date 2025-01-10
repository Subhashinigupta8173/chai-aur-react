// src/component/ChatPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import './ChatPage.css';

const ChatPage = () => {
  const { username } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      await addDoc(collection(db, "messages"), {
        username,
        text: newMessage,
        timestamp: new Date(),
      });
      setNewMessage("");
    }
  };

  return (
    <div className="chatPage">
      <h2>Chat with {username}</h2>
      <div className="chatMessages">
        {messages.map(message => (
          <div key={message.id} className="message">
            <strong>{message.username}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="messageInput">
        <input 
          type="text" 
          placeholder="Type your message..." 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
