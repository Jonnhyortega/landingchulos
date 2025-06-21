import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChatbotContainer } from "./ChatbotStyles";
import { sendMessage } from "../../utils/chatbot.js";
import "animate.css";
import { mirage } from 'ldrs'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
mirage.register()


export const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "¡Hola! Soy ChulosAI, el asistente de Chulos Design 💻\nPuedo ayudarte con dudas técnicas, servicios o contacto.\n¿Con qué querés comenzar?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    "¿Qué servicios ofrecés?",
    "¿Cómo me contacto?",
    "Necesito soporte",
  ];

  const toggleChat = () => setChatOpen(!chatOpen);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setChatOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleQuick = (txt) => {
    setInput(txt);
    handleSubmit(null, txt);
  };

  const handleSubmit = (e, override) => {
    if (e) e.preventDefault();
    const value = override ?? input;
    if (!value.trim()) return;
    setMessages([...messages, { from: "user", text: value }]);
    setInput("");
    setLoading(true);
    sendMessage(value, "chulos")
      .then((r) => {
        setLoading(false);
        setMessages((prev) => [...prev, { from: "bot", text: r }]);
      })
      .catch(() => {
        setLoading(false);
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Lo siento, ocurrió un error. ¿Podés intentar nuevamente?",
          },
        ]);
      });
  };

  return (
    <ChatbotContainer>
      {!chatOpen && (
        <button className="chat-icon" onClick={toggleChat} aria-label="Abrir chat">
          <img width="60" height="60" src="https://hpanel.hostinger.com/assets/images/intercom.svg" alt="bot" />
        </button>
      )}

      {chatOpen && (
        <div className="overlay" onClick={toggleChat}>
          <button className="close-btn" onClick={toggleChat} aria-label="Cerrar chat">
            ×
          </button>
          <div className="chat-window animate__animated animate__backInUp" onClick={(e) => e.stopPropagation()}>
            {/* <header className="chat-header">
              <img width="50" height="50" src="https://img.icons8.com/color/50/bot.png" alt="bot" />             
            </header> */}

            <div className="chat-messages">
              {messages.map((m, i) => (
                <div key={i} className={`message ${m.from} animate__animated animate__fadeIn`}>
                  {m.text}
                </div>
              ))}
              {loading && (
                <div className="message bot loading">                  
                  <l-mirage
                    size="60"
                    speed="2.5" 
                    color="white" 
                  ></l-mirage>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* <div className="quick-replies">
              {quickReplies.map((q, i) => (
                <button key={i} onClick={() => handleQuick(q)}>
                  {q}
                </button>
              ))}
            </div> */}

            <form className="chat-input-area" onClick={handleSubmit}>
              <input
                type="text"
                placeholder={"Escribe tu consulta"}
                value={input}
                onChange={(e) => {
                  const v = e.target.value;
                  if (v.length === 0) return setInput("");
                  setInput(v.charAt(0).toUpperCase() + v.slice(1));
                }}
                autoFocus
              />
              <button type="submit" >
                <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/60/sent.png" alt="sent"/>
              </button>
            </form>
          </div>
        </div>
      )}
    </ChatbotContainer>
  );
};

export default Chatbot;