import React from 'react';
import { PropertyIntro, PropertyIntroTwo, ServiceList, ContactForm, Footer } from '../components/common';

const PropertyManagement = () => {
  return (
    <div className='h-screen overflow-y-scroll'>
      <PropertyIntro />
      <PropertyIntroTwo />
      <ServiceList />
      <ContactForm />
      <div className="px-[2%] md:px-[6%] bg-footer border border-footer">
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PropertyManagement