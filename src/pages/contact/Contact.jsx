import React from 'react'
import ContactInfo from '../../components/contact/ContactInfo'
import ContactMessage from '../../components/contact/ContactMessage'
import Header from "../../components/common/Header"
import Footer from "../../components/common/Footer"

const Contact = () => {
  return (
    <>
    <Header />
    <ContactInfo /> 
    <ContactMessage />
    <Footer />
    </>
  )
}

export default Contact