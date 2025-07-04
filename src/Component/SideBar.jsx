import React, { useEffect, useState } from 'react'

import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SideBar = () => {
      const [sideBlogs, setSideBlogs] = useState([]);


      useEffect(()=>
    {
        fetch("/blogsData.json")
        .then(res => res.json())
        .then(data => setSideBlogs(data.slice(0,15)))
        .catch(error => console.log(error))
        console.log(sideBlogs);

    },
    []
)



  return (
    <div>
        <div>
            <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
            {
                
                sideBlogs.slice(0,5).map((blog)=>
                    <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                        <h4 className='font-medium m-2'>{blog.title}</h4>
                        <Link to='/' className='text-base pb-2 hover:text-orange-500 inline-flex items-center py-1'>Read more<FaArrowRight className='mt-1 ml-2'/> </Link>
                       
                                     
                    </div>
                )
            }
        </div>


        <div >
            <h3 className='text-2xl font-semibold px-4 mt-20'>Popular Blogs</h3>
            {
                sideBlogs.slice(6,10).map((blog) =>
                    <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                        <h4 className='font-medium m-2'>{blog.title}</h4>
                        <Link to='/' className='text-base pb-2 hover:text-orange-500 inline-flex items-center py-1'>Read more <FaArrowRight className='mt-1 ml-2'/> </Link>
                       
                                     
                    </div>
                )
            }
        </div>
      
    </div>
  )
}

export default SideBar
