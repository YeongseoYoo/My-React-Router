import React, { useState, useEffect } from 'react';
import { login } from '~/lib/apis/users';
import { useNavigate } from 'react-router-dom';

export default function SignInPage({ setDisplay }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  // const [userNickname, setUserNickname] = useState(''); // 유저의 닉네임 상태 추가
  const navigate = useNavigate();

  const singinUser = () => {
    login(email, password)
      .then((res) => {
        console.log(res);
        localStorage.setItem("signin", "true");
        // localStorage.setItem("userNickname", res.data.nickname); // 사용자의 닉네임을 로컬 스토리지에 저장
        // setDisplay("none"); // display 상태 변경
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    singinUser();
    console.log('Submitted:', { email, password });
  };

  const handleEmailMouseEnter = () => {
    setIsEmailFocused(true);
  };

  const handleEmailMouseLeave = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordMouseEnter = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordMouseLeave = () => {
    setIsPasswordFocused(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <h2 style={{ fontFamily: 'Comic Sans MS', marginBottom: '30px' }}>Sign In</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px', boxShadow: isEmailFocused ? '0px 0px 10px rgba(0, 0, 255, 0.5)' : '1px 1px 5px rgba(0, 0, 0, 0.3)', padding: '5px', borderRadius: '20px' }}>
          <label style={{ fontFamily: 'Comic Sans MS', marginRight: '10px', minWidth: '100px', textAlign: 'right' }}>Email:</label>
          <input
            style={{ width: '250px', padding: '10px', borderRadius: '20px', border: 'none', outline: 'none' }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            onMouseEnter={handleEmailMouseEnter}
            onMouseLeave={handleEmailMouseLeave}
          />
        </div>
        <div style={{ marginBottom: '20px', boxShadow: isPasswordFocused ? '0px 0px 10px rgba(0, 0, 255, 0.5)' : '1px 1px 5px rgba(0, 0, 0, 0.3)', padding: '5px', borderRadius: '20px' }}>
          <label style={{ fontFamily: 'Comic Sans MS', marginRight: '10px', minWidth: '100px', textAlign: 'right' }}>Password:</label>
          <input
            style={{ width: '250px', padding: '10px', borderRadius: '20px', border: 'none', outline: 'none' }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            onMouseEnter={handlePasswordMouseEnter}
            onMouseLeave={handlePasswordMouseLeave}
          />
        </div>
        <button style={{ backgroundColor: 'skyblue', color: 'white', border: 'none', borderRadius: '20px', padding: '10px 20px', cursor: 'pointer' }} type="submit">Sign In</button>
      </form>
    </div>
  );
}

