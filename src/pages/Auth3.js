import React from 'react'
import { useNavigate } from 'react-router-dom'
const Auth3 = () => {
    const navigate=useNavigate();
  return (
    <form>
    <h1>Coaches Valley Ai</h1>
    <h4>Define your Coaching Focus</h4>
    <label>What do your Auidience do for a living?</label>
    <input type='text' name='name' placeholder='Eg. Teachers,Doctors,Engineer' required="" />
    <button onClick={()=>navigate('/focus')}>Previous</button>
    <button onClick={()=>navigate('/goals')}></button>
    </form>
  )
}

export default Auth3;

