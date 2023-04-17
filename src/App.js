import React, {useState} from 'react'

const App = () =>{
  const [message,setMessage] = useState('');
  
  const handleClick = async()=>{
    const response = await fetch('/api/hello');
    const data = await response.json();
    setMessage(data.message);
  }
  return(
    <div className='App'>
      <button onClick={handleClick}>Click Me</button>
      <h1>{message}</h1>
    </div>
  )
}

export default App;