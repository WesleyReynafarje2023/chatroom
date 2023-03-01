import React, { useState, useEffect } from 'react';
import { Button} from 'react-bootstrap';
import Username from './Username';
import MessageInput from './MessageInput';
import UsernameInput from './UsernameInput';
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

  const [appState, setAppState] = useState('login')
  const [username, setUsername] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const onChange = (evt) => setMessageInput(evt.target.value);
  const onUNChange = (evt) => setUsername(evt.target.value);

  const onSubmit = function(evt) {
    evt.preventDefault();
    if (messageInput.length === 0) return;
    let payload = {message: messageInput, username: username};
    props.firebase.database().ref('chatLog').push(payload);
    setMessageInput('');
  }

  const onLogin = () => {
    setAppState('chat')
    
  }
  
  if(appState === 'login'){
    return(
      <div className='login-page'>
        <UsernameInput username={username} onUNChange={onUNChange}/>
        <Button onClick={onLogin}> 
          Login
        </Button>
      </div>
    )
  }

  else{
  return (
    <div className="chat-container">
      <Username username={username} />
      <ChatLog chatLog={chatLog} username={username}/>
      <MessageInput messageInput={messageInput} onChange={onChange} onSubmit={onSubmit}/>
    </div>
  );
  }
}


export default App;
