import React, { useState } from 'react';
import { login } from '~/lib/apis/users';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  // 각 입력 필드의 상태를 관리하는 state 변수들
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const singinUser = () => {
    login(email, password)
      .then((res) => {console.log(res); navigate('/'); })
      .catch((err) => console.log(err));
  };

  // TodoLogin 컴포넌트의 handleSubmit 함수를 그대로 사용
  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 로그인 로직을 추가 가능
    // 예를 들어, 서버로 로그인 정보를 전송하고 인증을 수행하는 등의 작업을 수행할 수 있습니다.
    singinUser();
    console.log('Submitted:', { email, password });
  };

  // TodoLogin 컴포넌트의 JSX를 가져와서 SignInPage 컴포넌트에서 반환
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <h2 style={{ fontFamily: 'Comic Sans MS', marginBottom: '30px' }}>Sign In</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
        <button style={{ backgroundColor: 'skyblue', color: 'white', border: 'none', borderRadius: '20px', padding: '10px 20px', cursor: 'pointer' }} type="submit">Sign In</button>
      </form>
    </div>
  );
}
