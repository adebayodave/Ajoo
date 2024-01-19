import { useState } from 'react'
import logo from './assets/logo.jpg'


function App() {

  return (
    <>
    <header className='flex justify-around'>
          <img src={logo} alt="" />
          <nav className='flex '>
            <p className=' text-xl'>Login</p>
            <p className=' text-xl'>Sign Up</p>
          </nav> 
        </header>
    </>
  )
}

export default App
