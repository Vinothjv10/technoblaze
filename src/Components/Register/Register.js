import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './Register.css'
import Registration from './Registration'

function Register() {
  return (
    <div className='register'>
        <Header />
        <Registration className="registerbody" />
        <Footer />
    </div>
  )
}

export default Register