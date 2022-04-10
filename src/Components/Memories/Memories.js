import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './Memories.css'
import Memory from './Memory'

function Memories() {
  return (
    <div className='memories'>
        <Header />
        <Memory />
        <Footer />
    </div>
  )
}

export default Memories