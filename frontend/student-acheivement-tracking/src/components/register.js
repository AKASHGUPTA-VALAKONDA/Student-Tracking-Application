import React, { useState } from 'react';
import axios from 'axios';
import '../style/home.css';
import Headers from './Headers';
const Register = () => {
  const [name, setName] = useState('');  
  const [rollno, setRollNo]=useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        name,
        rollno,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Registration error', error);
    }
  };

  return (
    <div>
      <Headers></Headers>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="FullName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="RollNo"
        value={rollno}
        onChange={(e) => setRollNo(e.target.value)}
      />
      <input
        type="email"
        placeholder="CollegeEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;