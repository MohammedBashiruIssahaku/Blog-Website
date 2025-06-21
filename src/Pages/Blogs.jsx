import React from 'react'
import BlogsPage from '../Component/BlogsPage'

const Blogs = () => {
  return (
    <div>
       <div className=' py-40 bg-black text-white font-bold text-center'>
           <p className='text-5xl lg:text-7xl text-center px-4 '>Blog Page</p>
       </div>
       
       <div className='max-w-7xl mx-auto'>
           <BlogsPage/>
       </div>
    </div>


  )
}

export default Blogs
