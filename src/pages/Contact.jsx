import React from 'react';
import { ContactForm, Footer } from '../components/common';

const Contact = () => {
  return (
    <div className='h-screen overflow-y-scroll'>
      <ContactForm />
      <div className="px-[2%] md:px-[6%] bg-footer border border-footer">
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Contact