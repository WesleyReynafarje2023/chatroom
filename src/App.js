import React, { useState, useEffect } from 'react';
import Chat from './Chat';
import LoginPage from './LoginPage'
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

  const [appState, setAppState] = useState('login')
  const [username, setUsername] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const onChange = (evt) => setMessageInput(evt.target.value);

  const onSubmit = function(evt) {
    evt.preventDefault();
    if (messageInput.length === 0) return;
    let payload = {message: messageInput, username: username};
    props.firebase.database().ref('chatLog').push(payload);
    setMessageInput('');
  }

  const onLogin = function(username) {
    setUsername(username);
    setAppState('chat');
  }

  
  if(appState === 'login'){
    return(
      <LoginPage onLogin={onLogin}/>
    )
  }

  if(appState === 'chat'){
  return (
      <Chat username={username}
          chatLog={chatLog}
          messageInput={messageInput}
          onChange={onChange}
          onSubmit={onSubmit} />
  );
  }
}


export default App;
