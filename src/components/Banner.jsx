import React from 'react'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <div>
        <div className='w-full h-[530px] flex justify-center mt-[40px]'>
            <div className='w-[80%] h-[500px]'>
                <img className='object-contain w-full h-full object-cover block rounded-2xl shadow-2xl' src={banner} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Banner