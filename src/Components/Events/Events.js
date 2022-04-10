import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import EventBackground from './EventBackground'
import EventDatas from './EventDatas'
import './Events.css'

function Events() {
  return (
    <div className='events'>
      <Header />
      <EventBackground />
      <EventDatas />
      <Footer />
    </div>
  )
}

export default Events