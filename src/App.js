import React, {useState} from 'react'

export default App = () =>{
  const [message,setMessage] = useState('');
  
  const handleClick = async()=>{
    const response = await fetch('/api/hello');
    const data = await response.json();
    setMessage(data.message);
  }
  return(
    <div className='App'>
      <button onClick={handleClick}>Click Me</button>
      <h>{message}</h>
    </div>
  )
}