import React, { useState, useEffect } from 'react';
import Username from './Username';
import MessageInput from './MessageInput';
import ChatLog from './ChatLog';
import './App.css';

function App(props) {

  useEffect(() => {
    props.firebase.database().ref('chatLog').on('value', snapshot => {
      let items = snapshot.val();
      if (items) {
        items = Object.values(items);
      } else {
        items = [];
      }
      setChatLog(items);
    })
  }, [props.firebase])

  const [username, setUsername] = useState('Test user');
  const [messageInput, setMessageInput] = useState('New Chat');
  const [chatLog, setChatLog] = useState([]);

  const onChange = (evt) => setMessageInput(evt.target.value);

  const onSubmit = function(evt) {
    evt.preventDefault();
    console.log('Submitted!');
      }
  

  return (
    <div className="chat-container">
      <Username username={username} />
      <ChatLog chatLog={chatLog} username={username}/>
      <MessageInput messageInput={messageInput} onChange={onChange} onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
