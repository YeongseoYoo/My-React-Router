import React, { useState } from 'react';

export default function SignUpPage() {
  // 각 입력 필드의 상태를 관리하는 state 변수들
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 폼 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 회원가입 로직을 추가할 수 있습니다.
    // 예를 들어, 서버로 회원가입 정보를 전송하는 등의 작업을 수행할 수 있습니다.
    console.log('Submitted:', { username, email, password });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', backgroundColor: '#f2f2f2' }}>
      <h2 style={{ fontFamily: 'Comic Sans MS', marginBottom: '30px' }}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <label style={{ fontFamily: 'Comic Sans MS', marginRight: '10px', minWidth: '100px', textAlign: 'right' }}>Nickname:</label>
          <input
            style={{ width: '250px', padding: '10px', borderRadius: '20px' }}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <label style={{ fontFamily: 'Comic Sans MS', marginRight: '10px', minWidth: '100px', textAlign: 'right' }}>Email:</label>
          <input
            style={{ width: '250px', padding: '10px', borderRadius: '20px' }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <label style={{ fontFamily: 'Comic Sans MS', marginRight: '10px', minWidth: '100px', textAlign: 'right' }}>Password:</label>
          <input
            style={{ width: '250px', padding: '10px', borderRadius: '20px' }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button style={{ backgroundColor: '#006400', color: 'white', border: 'none', borderRadius: '20px', padding: '10px 20px', cursor: 'pointer' }} type="submit">Sign Up</button>
      </form>
    </div>
  );
}
