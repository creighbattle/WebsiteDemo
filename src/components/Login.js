import React from 'react'
import '../login.css'

function Login() {
    return (
        <div class='hero'>
            <div class='form-box'>
                <div class="button-box">
                    <button type='button' className='toggle-btn'>Log In</button>
                    <button type='button' className='toggle-btn'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Login