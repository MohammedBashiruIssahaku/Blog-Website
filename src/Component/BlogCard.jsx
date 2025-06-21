import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';


const BlogCard = ({blogs , currentPage , pageSize , selectedCategory}) => {

      const filteredBlogs = blogs;


  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-8'>
      {
          filteredBlogs.map((blog)=> 
          <Link key={blog.id} className='p-5 shadow-lg hover:shadow-blue-400'>
              <div>
                <img src={blog.image} alt="" className='w-full' />
              </div>
              <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'><FaUser className='inline-flex items-center mr-2'/>{blog.title}</h3>
              <p className='mb-2'>{blog.author}</p>
              <p className='text-sm text-gray-500 mb-2'>Published: {blog.published_date}</p>
             
          </Link>
          )
      }
     
    </div>
  )
}

export default BlogCard
