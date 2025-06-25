import React from 'react'
import { GrDisabledOutline } from 'react-icons/gr';

const Pagination = ({onPageChange, currentPage , pageSize , blogs}) => {
     
    const totalPages = Math.ceil(blogs.length / pageSize);


    const renderPaginationLinks = ()=>
    {
        return Array.from({length: totalPages}, (_,i) => i+1 ).map((pageNumber) => (
            <li className={pageNumber === currentPage ? 'activePagination': ''}  key= {pageNumber}>
                <a href="#" onClick={()=> onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
        
    }

          
        


  return (
    
        <ul className='pagination my-8 flex-wrap gap-4'>
            <li className='m-0'>
                <button onClick={()=> onPageChange(currentPage - 1)} disabled={currentPage === 1} > Previous </button>

            </li>

            <div className='flex gap-2' >
                {renderPaginationLinks()}
            </div>

            <li>
                <button onClick={()=> onPageChange(currentPage + 1)} disabled = {currentPage === totalPages}>Next</button>
            </li>
        </ul>
       

  )
}

export default Pagination
