import React from 'react'
import "./signup.css"

export default function SignUp() {
  return (
    <div className='signup'>
        <div className='signup-container'>
            <h2 className="title" >Sign Up</h2>
            <input className="form" type="text" id="fusername" name="fusername" placeholder="Username"/><br/>
            <input className="form" type="password" id="fpassword" name="fpassword" placeholder="Password"/><br/>
            <input className="form" type="password" id="fcpassword" name="fcpassword" placeholder="Confirm Password"/>
            <br/>
            
            <a href="http://localhost:3000/preference" className="button">Sign up</a>
            
            <p className="redirect">Don't have an account? <a href="http://localhost:3000/signin">Sign In</a></p>
        </div>
    </div>
  )
}