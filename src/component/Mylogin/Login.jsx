import React, { useState } from 'react';
import './styles.css'

  const LoginSignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [Phone, setPhone] = useState('');
  
    const handleLogin = () => {
     
      console.log('Login clicked');
    };
  
    const handleSignup = () => {
    
      console.log('Signup clicked');
    };
  
    const toggleForm = () => {
      setIsLogin(!isLogin);
    };
  
    return (
      <div className="login-page">
        <div className="form-container1">
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <form className='form1'>
            <input
              className='logInput'
              type="text"
              placeholder="username-"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className='logInput'
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='logInput'
              type="number"
              placeholder="Phone Number"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className='logInput'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='logButton1' type="submit" onClick={isLogin ? handleLogin : handleSignup}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
            
          </form>
          <button className='logButton1' onClick={toggleForm}>
            {isLogin ? 'Create an account' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    );
  };

export default LoginSignupPage;


