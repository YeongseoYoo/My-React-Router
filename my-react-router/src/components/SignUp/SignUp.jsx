import React, { useState } from 'react';
import { signUp } from '~/lib/apis/users';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  // 각 입력 필드의 상태를 관리하는 state 변수들
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false); // 닉네임 입력 필드에 마우스가 있는지 여부를 나타내는 상태
  const [isEmailFocused, setIsEmailFocused] = useState(false); // 이메일 입력 필드에 마우스가 있는지 여부를 나타내는 상태
  const [isPasswordFocused, setIsPasswordFocused] = useState(false); // 비밀번호 입력 필드에 마우스가 있는지 여부를 나타내는 상태
  const navigate = useNavigate();

  const signupUser = () => {
    signUp(email, password, username)
      .then((res) => { console.log(res); navigate('/'); })
      .catch((err) => console.log(err));
  };

  // handleSubmit 함수 정의
  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 회원가입 로직을 추가할 수 있습니다.
    // 예를 들어, 서버로 회원가입 정보를 전송하는 등의 작업을 수행할 수 있습니다.
    signupUser();
    console.log('Submitted:', { username, email, password });
  };

  // 함수: 닉네임 입력 필드에 마우스가 올라갔을 때
  const handleUsernameMouseEnter = () => {
    setIsUsernameFocused(true); // 닉네임 입력 필드에 마우스가 올라간 상태로 변경하여 그림자 스타일 적용
  };

  // 함수: 닉네임 입력 필드에서 마우스가 떠났을 때
  const handleUsernameMouseLeave = () => {
    setIsUsernameFocused(false); // 닉네임 입력 필드에 마우스가 떠난 상태로 변경하여 그림자 스타일 제거
  };

  // 함수: 이메일 입력 필드에 마우스가 올라갔을 때
  const handleEmailMouseEnter = () => {
    setIsEmailFocused(true); // 이메일 입력 필드에 마우스가 올라간 상태로 변경하여 그림자 스타일 적용
  };

  // 함수: 이메일 입력 필드에서 마우스가 떠났을 때
  const handleEmailMouseLeave = () => {
    setIsEmailFocused(false); // 이메일 입력 필드에 마우스가 떠난 상태로 변경하여 그림자 스타일 제거
  };

  // 함수: 비밀번호 입력 필드에 마우스가 올라갔을 때
  const handlePasswordMouseEnter = () => {
    setIsPasswordFocused(true); // 비밀번호 입력 필드에 마우스가 올라간 상태로 변경하여 그림자 스타일 적용
  };

  // 함수: 비밀번호 입력 필드에서 마우스가 떠났을 때
  const handlePasswordMouseLeave = () => {
    setIsPasswordFocused(false); // 비밀번호 입력 필드에 마우스가 떠난 상태로 변경하여 그림자 스타일 제거
  };

  // JSX 반환
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <h2 style={{ fontFamily: 'Comic Sans MS', marginBottom: '30px' }}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '20px', boxShadow: isUsernameFocused ? '0px 0px 10px rgba(0, 0, 255, 0.5)' : '1px 1px 5px rgba(0, 0, 0, 0.3)', padding: '5px', borderRadius: '20px' }}>
          <label style={{ fontFamily: 'Comic Sans MS', marginRight: '10px', minWidth: '100px', textAlign: 'right' }}>Nickname:</label>
          <input
            style={{ width: '250px', padding: '10px', borderRadius: '20px', border: 'none', outline: 'none' }}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            onMouseEnter={handleUsernameMouseEnter} // 닉네임 입력 필드에 마우스가 올라갔을 때 이벤트 핸들러
            onMouseLeave={handleUsernameMouseLeave} // 닉네임 입력 필드에서 마우스가 떠났을 때 이벤트 핸들러
          />
        </div>
        <div style={{ marginBottom: '20px', boxShadow: isEmailFocused ? '0px 0px 10px rgba(0, 0, 255, 0.5)' : '1px 1px 5px rgba(0, 0, 0, 0.3)', padding: '5px', borderRadius: '20px' }}>
          <label style={{ fontFamily: 'Comic Sans MS', marginRight: '10px', minWidth: '100px', textAlign: 'right' }}>Email:</label>
          <input
            style={{ width: '250px', padding: '10px', borderRadius: '20px', border: 'none', outline: 'none' }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            onMouseEnter={handleEmailMouseEnter} // 이메일 입력 필드에 마우스가 올라갔을 때 이벤트 핸들러
            onMouseLeave={handleEmailMouseLeave} // 이메일 입력 필드에서 마우스가 떠났을 때 이벤트 핸들러
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
            onMouseEnter={handlePasswordMouseEnter} // 비밀번호 입력 필드에 마우스가 올라갔을 때 이벤트 핸들러
            onMouseLeave={handlePasswordMouseLeave} // 비밀번호 입력 필드에서 마우스가 떠났을 때 이벤트 핸들러
          />
        </div>
        <button style={{ backgroundColor: '#006400', color: 'white', border: 'none', borderRadius: '20px', padding: '10px 20px', cursor: 'pointer' }} type="submit">Sign Up</button>
      </form>
    </div>
  );
}
