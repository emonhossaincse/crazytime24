import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const createPlayer = async () => {
    const apiUrl = 'https://stage.game-program.com/api/seamless/provider';

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_password: 'CQyE62YHH2ygbPd1Cb',
        api_login: 'six6_mc_s',
        method: 'createPlayer',
        user_username: username,
        user_password: password,
        user_nickname: nickname,
        currency: 'EUR',
      }),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const responseData = await response.json();

      if (responseData.error === 0) {
        console.log('Player created successfully:', responseData.response);
      } else {
        console.error('Error creating player:', responseData.message);
      }
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  return (
    <div>
      <h1>Create Player</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Nickname:
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </label>
      <br />
      <button onClick={createPlayer}>Create Player</button>
    </div>
  );
}

export default App;
