import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {
  const [username , setUsername] = useState('')
const [password , setPassword] = useState('')

    const handleSubmit = () => {


  }
  
    return (
   <div>
<h2>login</h2>

<input 
value={username} 
onChange={(e) => setUsername(e.target.value)} 
type ='text'  
placeholder='username'/>

<input 
type ='text'  
placeholder='password'
value={password}
onChange={(e)=> setPassword(e.target.value)}

/>
<button onClick={handleSubmit}>Submit</button>

   </div>
  )
}

export default Login