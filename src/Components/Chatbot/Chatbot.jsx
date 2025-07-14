// src/components/Chatbot.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChatbotContainer } from "./ChatbotStyles";
import logo from "../../imgs/Logo.png";
import  callChatAPI  from "../../utils/chatbot";
import "animate.css";
import { mirage } from 'ldrs';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

mirage.register();

export const Chatbot = ({ context = "" }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! Soy ChulosAI, el asistente de Chulos Design 💻\n¿En qué puedo ayudarte hoy?" }
  ]);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    { label: "¿Cómo puedo pedir un presupuesto?", value: "¿Cómo puedo pedir un presupuesto?" },
    { label: "¿Dónde los encuentro?", value: "¿Dónde los encuentro?" },
    { label: "Redes sociales", value: "Redes sociales" }
  ];

  const toggleChat = () => setChatOpen(!chatOpen);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(scrollToBottom, [messages, scrollToBottom]);

  useEffect(() => {
    const handleEsc = e => e.key === "Escape" && setChatOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const send = async text => {
    const userMsg = { from: "user", text };
    setMessages(prev => [...prev, userMsg]);
    const newHistory = [...history, { role: 'user', content: text }];
    setHistory(newHistory);
    setLoading(true);

    let reply;
    switch(text) {
      case "¿Cómo puedo pedir un presupuesto?":
        reply = "¡Genial! Podés pedirme un presupuesto haciendo click aquí: https://wa.me/541158227373";
        break;
      case "¿Dónde los encuentro?":
        reply = "Tenemos nuestro local en Lugano. Podemos coordinar una reunión para charlar de tu proyecto.";
        break;
      case "Redes sociales":
        reply = "¡Seguinos en redes! Instagram: https://www.instagram.com/chulos.design/, https://www.facebook.com/profile.php?id=100070733544658";
        break;
      default:
        try {
          reply = await callChatAPI(text, newHistory, context);
        } catch {
          reply = "Lo siento, ocurrió un error. ¿Podés intentar nuevamente?";
        }
    }

    const botMsg = { from: "bot", text: reply };
    setMessages(prev => [...prev, botMsg]);
    setHistory(prev => [...prev, { role: 'model', content: reply }]);
    setLoading(false);
  };

  const handleSubmit = e => { e.preventDefault(); if(input.trim()) send(input.trim()) && setInput(""); };

  return (
    <ChatbotContainer>
      {!chatOpen ? (
        <button className="chat-icon" onClick={toggleChat} aria-label="Abrir chat">
          <img src="https://img.icons8.com/fluency/48/speech-bubble.png" alt="Chat icon" />
        </button>
      ) : (
        <div className="overlay" onClick={toggleChat}>
          <div className="chat-window animate__animated animate__backInUp" onClick={e => e.stopPropagation()}>
            <header className="chat-header">
              <img src={logo} alt="Logo" />
              <strong>Chulos design</strong>
              <button className="close-btn" onClick={toggleChat}>×</button>
            </header>
            <div className="chat-messages">
              {messages.map((m,i)=>(<div key={i} className={`message ${m.from}`}>{m.text}</div>))}
              {loading && <div className="message bot loading"><l-mirage size="40"/></div>}
              <div ref={messagesEndRef}/>
            </div>
            <div className="quick-replies">
              {quickReplies.map((q,i)=>(
                <button key={i} onClick={()=>send(q.value)}>{q.label}</button>
              ))}
            </div>
            <form className="chat-input-area" onSubmit={handleSubmit}>
              <input type="text" placeholder="Escribí tu consulta..." value={input} onChange={e=>setInput(e.target.value)}/>
              <button type="submit"><FontAwesomeIcon icon={faArrowUp}/></button>
            </form>
          </div>
        </div>
      )}
    </ChatbotContainer>
  );
};

export default Chatbot;
