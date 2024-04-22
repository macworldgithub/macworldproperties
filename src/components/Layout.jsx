import React, { useState, useContext } from 'react';
import Sidebar from './common/Sidebar';
import { Store } from '../context/store';
import {
  BsArrowLeftShort
} from "react-icons/bs";

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(Store);
  const [toggleMobileOpen, setToggleMobileOpen] = useState(false);
  return (
    <div className={`h-screen auto-rows-min grid ${toggleMobileOpen ? 'grid-cols-[284px_1fr]': 'grid-cols-[0px_1fr]' } ${state.open ? "lg:grid-cols-[284px_1fr]" : "lg:grid-cols-[68px_1fr]"} gap-1 relative`}>
      <BsArrowLeftShort className={`block lg:hidden bg-ordinary text-footer text-3xl rounded-full absolute left-5 z-50 top-9 border border-footer cursor-pointer`}
        onClick={() => {
          setToggleMobileOpen(state => !state);
        }}
      />
      {/* <div className='relative'> */}
      <Sidebar className='row-span-full' setToggleMobileOpen={setToggleMobileOpen} toggleMobileOpen={toggleMobileOpen} />
      <main className='col-start-2 col-end-3 row-span-full lg:row-span-2 custom-main-grid h-screen'>
        {children}
      </main>
      {/* </div> */}
    </div>
  )
}

export default Layout;