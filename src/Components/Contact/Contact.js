import React from 'react'
import './Contact.css'
import Header from '../Header'
import Footer from '../Footer'
import ContactCard from './ContactCard'

function Contact() {
  return (
    <div className='contact'>
        <Header />
        <ContactCard />
        <Footer />
    </div>
  )
}

export default Contact