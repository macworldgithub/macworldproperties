import React,{useState} from 'react';
import Sidebar from './common/Sidebar';

const Layout = ({children}) => {
  return (
    <div className='flex w-screen layout overflow-hidden'>
        <Sidebar />
        <main className='w-full h-screen' >
            {children}
        </main>
</div>
  )
}

export default Layout;