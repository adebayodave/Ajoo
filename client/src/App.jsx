import { useState } from 'react'
import logo from './assets/logo.jpg'


function App() {

  return (
    <>
    <header className='flex  '>
          <img src={logo} alt="" />
          <nav>
            <p>Login</p>
            <p>Sign Up</p>
          </nav> 
        </header>
    </>
  )
}

export default App
