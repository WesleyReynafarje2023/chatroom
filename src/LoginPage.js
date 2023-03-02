import React from 'react';

function LoginPage(props) {

  return (
    <div className="login-page" id="login-page">
      <UsernameInput username={username} onUNChange={onUNChange}/>
      <Button onClick={onLogin}> 
        Login
      </Button>
    </div>
  );
}

export default LoginPage;
