'use client'
import React, { useState } from 'react';
import './uma.css'; 

import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation';
const supabaseUrl = 'https://xnpbgshwasrramtvbzgx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhucGJnc2h3YXNycmFtdHZiemd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5Nzk0MjEsImV4cCI6MjAyOTU1NTQyMX0.SLMupGKcXFpA9HXG_xgzLfgDHTqEKNUu77XBbHaNrds'
const supabase = createClient(supabaseUrl, supabaseKey)


const LoginSignupPopup = ({stopit}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await supabase.from('Users').select('*').eq('email',email).then(({data})=>{
            
        if(data[0].password === password)
        {
            localStorage.setItem('email',data[0].email)
        localStorage.setItem('phone',data[0].phone)
        localStorage.setItem('username',username)
        localStorage.setItem('id',data[0].id)
        localStorage.setItem('auth','111')
        localStorage.setItem('address',data[0].address)
        stopit()
        }
        else
        {
            setErrorMessage('Invalid Credentials')
            setIsLoading(false)
        }
        
        
        
    }).catch(err=>{
        setErrorMessage('No User found')
        setIsLoading(false)
    })
    
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2 style={{ color: 'black' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />}
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {!isLogin && <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />}
          {!isLogin && <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />}
          <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : (isLogin ? 'Login' : 'Sign Up')}</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
        <p onClick={switchForm}>
          {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
        </p>
      </div>
    </div>
  );
};

export default LoginSignupPopup;
