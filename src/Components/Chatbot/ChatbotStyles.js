import styled from "styled-components";

export const ChatbotContainer = styled.section`
  position: fixed;
  bottom: 80px;
  right: 30px;
  font-family: Arial, sans-serif;
  z-index: 10000;
  background-color: transparent;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px) saturate(180%);
    -webkit-backdrop-filter: blur(3px) saturate(180%);
    background-color: rgba(255, 255, 255, 0);
    z-index: 9999;

    .close-btn {
    background: transparent;
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  }

  .chat-icon {
    background: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    width: 56px;
    height: 56px;
  }

  .chat-icon img {
    transition: 0.3s ease;
  }

  .chat-icon img:hover {
    transform: scale(1.1);
    filter: drop-shadow(1px 1px 5px var(--violetFull1));
  }

  .chat-window {
    max-width: 500px;
    height: 90%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    bottom: 20px;
    right: 20px;
    border: 1px solid var(--greenFull4);
  }

  .chat-header {
    background: #2f2f2f;
    color: white;
    padding: 12px 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 1px 1px 5px black;
  }

  .chat-header img {
    filter: drop-shadow(1px 1px 5px black);
  } 

  .chat-messages {
    flex: 1;
    padding: 12px 16px;
    overflow-y: auto;
    background: var(--silverFull5);
  }

  .message {
    margin-bottom: 10px;
    padding: 8px 12px;
    border-radius: 16px;
    width: fit-content;
    max-width: 80%;
    word-wrap: break-word;
    font-family: var(--inter);
    font-weight: 300;
    box-shadow: 1px 1px 10px grey;
  }

  .message.user {
    background: var(--greenFull1);
    color: white;
    align-self: flex-end;
  }

  .message.bot {
    background: var(--greenFull5);
    color: white;
    align-self: flex-start;
  }

  .message.loading {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .chat-input-area {
  border-top: 1px solid var(--greenFull5);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 5px;
  width: 100%;
  background-color: var(--silverFull5);
  }

  .chat-input-area input {
    border: none;
    background: transparent;
    border-radius: 10px;
    font-size: 14px;
    padding: 10px;
    outline: none;
    font-family: "Roboto";
    color: black;
    width: 90%;
    margin-bottom: 2px;
  }


  .chat-input-area button {
    border: none;
    background: var(--greenFull5);
    color: black;
    margin-right: 2rem;
    width: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
    }

  .chat-input-area button:hover {
    background: black;
    color: white;
  }

  .chat-input-area input::placeholder {
    color: black;
    font-weight: 200;
  }

  .chat-input-area > button {
    background: var(--greenFull4);
    border: 1px solid transparent;
    color: black;
    padding: 8px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s ease;
  }

  .chat-input-area button:hover {
    background: var(--greenFull7);
  }

  .quick-replies {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 8px 12px;
    background: var(--silverFull5);
  }

  .quick-replies button {
    background: #ffffff;
    border: none;
    border-radius: 16px;
    padding: 6px 12px;
    font-size: 12px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .quick-replies button:hover {
    background: #7e3ff2;
    color: white;
  }
`;
