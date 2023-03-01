import React from 'react';

function UsernameInput(props) {
  return (
    <div>
        <input type="text" 
              name="username-input" 
              id="username-input" 
              onChange={props.onUNChange}
              value={props.username} 
              placeholder="Enter your username"
        />    
    </div>
  );
}

export default UsernameInput;
