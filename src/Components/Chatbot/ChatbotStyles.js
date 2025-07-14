/* src/components/ChatbotStyles.jsx */
import styled from "styled-components";

export const ChatbotContainer = styled.section`
  position: fixed;
  bottom: 80px;
  right: 22px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  z-index: 999;

  .chat-icon {
    border: none;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;
    z-index: 999;
  }

  .chat-icon img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .chat-icon:hover {
    transform: scale(1.1);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .chat-window {
    background: #fff;
    border-radius: 12px;
    width: 360px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .chat-header {
    background: var(--greenFull1);
    color: #fff;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .chat-header img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-shadow: 1px 1px 5px 1px black;
  }

 .chat-header > strong {
    font-family: "Dancing Script", cursive;
    background: #17202a;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 30px;
  }

  .close-btn {
    background: transparent;
    border: none;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
  }

  .close-btn:hover{
    color: var(--greenFull6);
  }

  .chat-messages {
    flex: 1;
    padding: 10px;
    background: var(--silverFull5);
    overflow-y: auto;
  }

  .message {
    margin-bottom: 10px;
    padding: 8px 12px;
    border-radius: 16px;
    max-width: 80%;
    word-wrap: break-word;
    line-height: 1.4;
  }

  .message.user {
    background: var(--greenFull4);
    color: #fff;
    align-self: flex-end;
  }

  .message.bot {
    background: var(--silverFull2);
    color: #333;
    align-self: flex-start;
  }

  .message.loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quick-replies {
    display: flex;
    gap: 8px;
    padding: 8px;
    background: var(--silverFull6);
    flex-wrap: wrap;
  }

  .quick-replies button {
    background: var(--greenFull2);
    border: none;
    border-radius: 16px;
    padding: 6px 12px;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .quick-replies button:hover {
    background: var(--greenFull3);
  }

  .chat-input-area {
    display: flex;
    padding: 8px;
    border-top: 1px solid var(--silverFull4);
    background: #fff;
  }

  .chat-input-area input {
    flex: 1;
    border: 1px solid var(--silverFull3);
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 14px;
    outline: none;
  }

  .chat-input-area button {
    background: var(--greenFull1);
    border: none;
    margin-left: 8px;
    padding: 8px 12px;
    width: 40px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease;
    color: white;
  }

  .chat-input-area button:hover {
    background: var(--greenFull6);
  }
`;
