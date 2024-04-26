import React from 'react'
import { BlogPostList, Footer } from '../components/common'

const Blog = () => {
  return (
    <div className='mt-[15vh] h-screen overflow-y-scroll'>
    <BlogPostList/>
    <div className="px-[2%] md:px-[6%] bg-footer border border-footer">
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Blog