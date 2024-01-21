import React from 'react'
import '../styles/form.css';
const Form = () => {
  return (

     <div className='main' id='ma'>
        <input type='checkbox' id='chk' aria-hidden="true" />
        <div className='signup'>
            <form>
                <label for="chk" aria-hidden="true">Sign Up</label>
                <input type='text' name='txt' placeholder='username' required=""/>
                <input type='email' name='email' placeholder='Email' required=""/>
                <input type='password' name='password' placeholder='password' required=""/>
                <button className='bttn'>Sign up</button>
            </form>
        </div>
        <div className='login'>
          <form>
            <label for="chk" aria-hidden="true">Login</label>
            <input type='email' name='email' placeholder='Email' required="" />
            <input type='Password' name='password' placeholder='Password' required=""/>
            <button className='bttn'>Login</button>
          </form>
        </div>
    </div>

  )
}

export default Form;