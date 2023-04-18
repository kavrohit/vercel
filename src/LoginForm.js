import React,{useState} from 'react';
import axios from 'axios';
import {Form,Button, FormLabel} from 'react-bootstrap';

const LoginForm = ()=>{
  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('');

  const handleSubmit = async(event)=>{
    event.preventDefault();
    try {
      const response = await axios.post('/api/login',{email,password});
      console.log(response.data.message);
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='email'>
        <Form.Label>Email</Form.Label>
        <Form.Control
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
      </Form.Group>
      
      <Form.Group controlId='Password'>
        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>
      <Button type ="submit">Login</Button>
    </Form>
  )
}

export default LoginForm