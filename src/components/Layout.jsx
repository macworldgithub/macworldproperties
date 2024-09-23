import React, { useState, useContext } from 'react';
import Sidebar from './common/Sidebar';
import { Store } from '../context/store';
import {
  AiOutlineClose
} from "react-icons/ai";
import { FaAlignRight } from "react-icons/fa";
import '../App.css'

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(Store);
  const [toggleMobileOpen, setToggleMobileOpen] = useState(false);
  return (
    // ${toggleMobileOpen ? 'grid-cols-[284px_1fr]': 'grid-cols-[0px_1fr]' }
    <div className={`overflow-y-hidden h-screen auto-rows-min grid grid-cols-[0px_1fr] lg:grid-cols-[284px_1fr] ${state.open ? "lg:grid-cols-[284px_1fr]" : "lg:grid-cols-[68px_1fr]"} gap-1 relative`}>
      {/* <BsArrowLeftShort className={`${toggleMobileOpen ? "rotate-180" : "rotate-0"} block lg:hidden bg-ordinary text-footer text-3xl rounded-full absolute left-5 z-50 top-9 border border-footer cursor-pointer`}
        onClick={() => {
          setToggleMobileOpen(state => !state);
        }}
      /> */}
      {!toggleMobileOpen && <FaAlignRight
        onClick={() => {
          setToggleMobileOpen(state => !state);
        }}
        className={`button-style-progress-button block lg:hidden bg-ordinary text-footer text-xl p-1 rounded absolute left-5 z-50 top-9 border border-footer cursor-pointer h-7 w-7`} 
        />}
      {toggleMobileOpen && <AiOutlineClose className={`${toggleMobileOpen ? "left-[300px]" : "left-4"} font-semibold bg-ordinary text-footer p-1 h-7 w-7 button-style-progress-button block lg:hidden border border-footer text-footer text-3xl rounded-full absolute z-50 top-9 border border-footer cursor-pointer`} onClick={() => {
        setToggleMobileOpen(state => !state);
        // dispatch({ type: 'TOGGLE_SIDEBAR' });
      }}
      />}
      {/* <div className='relative'> */}
      <Sidebar className='row-span-full' setToggleMobileOpen={setToggleMobileOpen} toggleMobileOpen={toggleMobileOpen} />
      <main className='col-start-2 col-end-3 lg:row-span-2 h-screen overflow-y-scroll'>
        {children}
      </main>
      {/* </div> */}
    </div>
  )
}

export default Layout;