import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {NavLink } from 'react-router-dom';
import {FaFacebook} from 'react-icons/fa';
import {FaDribbble} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';


const NavBar = () => {
     const [isMenuOn, setIsMenuOn] = useState(false);

     const toggleOn = ()=>
     {
        setIsMenuOn(!isMenuOn);
     }




    const navItems = [
        {path:'/', Link: 'Home'},
        {path:'/about', Link: 'About'},
        {path:'/blogs', Link: 'Blogs'},
        {path:'/contact', Link: 'Contact'},
        {path:'/services', Link: 'Services'}

    ];





  return (
    <div>
        <header className='bg-black fixed top-0 right-0 left-0 '>
            <nav className='px-2 py-2 flex justify-between items-center max-w-7xl mx-auto '>
                <p className='text-white px-8 py-2 text-xl cursor-pointer' >Bashiru<span className='text-yellow-300 font-bold'>Dev</span> </p>
                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navItems.map(({path, Link}) => <li className='text-white' key={path}>
                              <NavLink to={path} 
                               className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : ""
                    }>{Link}</NavLink>
                        </li>)
                    }
                  
                    
                </ul>

                <div className='text-white lg:flex gap-2 items-center hidden m-4 px-10 text-sm ' >
                      <a href="" className='hover:text-orange-500'><FaFacebook/></a>
                      <a href="" className='hover:text-orange-500'><FaDribbble/></a>
                      <a href="" className='hover:text-orange-500'><FaTwitter/></a>


                      <button className='bg-orange-500 rounded font-medium py-2 px-6 mx-20 hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log In</button>

                    </div>
                       
                     <div className='md:hidden text-white '>
                        <button onClick={toggleOn} className='cursor-pointer'>
                            <FaBars className='w-5 h-5'/>
                        </button>
                    
                    </div>         
 
            </nav>

           {/* menu items for mobile */}
            <div>
                <ul className= {`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 bg-white 
                 ${isMenuOn ? "fixed right-0 left-0 w-full bg-gray-100 transition-all duration-150 ease-out" : "hidden" } `} >
                    {
                        navItems.map(({path, Link}) => <li className='text-black' key={path}>
                              <NavLink onClick={toggleOn} to={path}>{Link}</NavLink>
                        </li>)
                    }

                 </ul>


             </div>


        </header>
      
    </div>
  )
}

export default NavBar
