import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';

const BlogsPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12 //blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory , setActiveCategory] = useState(null);

    useEffect(()=>
    {
        async function fetchData(){
            let url = "blogsData.json";

            //filter by category
            if(selectedCategory)
            {
               url += `&category=${selectedCategory}`
            }
             
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }

        fetchData();

    },[currentPage , pageSize , selectedCategory]);

      
    const handlePageChange = (pageNumber)=>
    {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) =>
    {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);

    }


  return (
    <div className=''>
      {/* Category Section */}
      <div>
          <CategorySelection onSelectedCategory = {handleCategoryChange} selectedCategory = {selectedCategory} activeCategory= {activeCategory}/>
      </div>

      {/* BlogCards Section */}
      <div>
           <BlogCard blogs = {blogs} currentPage ={currentPage} pageSize={pageSize} selectedCategory = {selectedCategory}/>
      </div>
       
       {/* Pagination Section */}
       <div className='py-14'>
         <Pagination onPageChange = {handlePageChange} currentPage={currentPage} pageSize = {pageSize} blogs={blogs}/>

       </div>
       
    </div>
  )
}

export default BlogsPage
