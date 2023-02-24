import React from 'react';

function MessageInput(props) {
  return (
    <div className="chat-message-input">
      <input type="text" 
             name="message-input" 
             id="message-input" 
             onChange={props.onChange}
             value={props.messageInput} />

    </div>
  );
}

export default MessageInput;
