import React from 'react'
import logo from '../assets/logo.png'
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='w-full h-[70px] shadow-2xl flex'>
            <div className='w-[20%] h-full flex justify-end'>
                <div className='w-[30%] h-full'>
                    {/* logo */}
                    <Link to= "/">
                        <img className='w-full h-full object-contain' src={logo} alt="" />
                    </Link>

                </div>

            </div>
            <div className='w-[60%] h-full'>

            </div>
            <div className='w-[20%] h-full'>
                {/* login */}
                <div className='w-[50%] h-full flex justify-center items-center'>
                    <div className='w-[70%] h-[50%] rounded-2xl flex justify-center items-center hover:bg-gray-600 bg-black'>
                        <CiLogin className='text-xl text-amber-50 mr-2'></CiLogin>
                        <Link to ="/login" className='flex justify-center items-center text-[18px] text-amber-50'>Log In</Link>
                        {/* <button /> Log In</button> */}

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Navbar