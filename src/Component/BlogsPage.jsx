import React, { useEffect, useState } from 'react'

const BlogsPage = () => {
    const [Blogs, setBlocks] = useState([]);

    useEffect(()=>
    {
        async function fetchData(){
            const url = "http://localhost:5000/";
             
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setBlocks(data);
        }

        fetchData();

    },[]);

      


  return (
    <div>
    </div>
  )
}

export default BlogsPage
