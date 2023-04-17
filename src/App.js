import React, {useState,useEffect} from 'react'

const App = () =>{

  const [message,setMessage] = useState('');
  const [name,setName] = useState('')

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch(`/api/hello?name=${name}`);
    const data = res.text();
    setMessage(data);
  }
  return(
    <div className='App'>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          <button type="submit">Say Hello</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default App;