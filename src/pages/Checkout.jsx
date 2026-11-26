import React from 'react'
import { CiCircleQuestion } from "react-icons/ci";
import { LuAsterisk } from "react-icons/lu";
import { FiUserCheck } from "react-icons/fi";

const Checkout = () => {
  return (
    <div>
        <div className='w-full h-[430px] flex justify-center'>
            <div className='w-[80%] h-[400px] flex justify-center bg-white rounded-2xl shadow-xl'>
                <div className='w-[95%] h-full'>
                    <div className='w-full h-[20%] flex justify-center items-center'>
                        <div className='w-full h-[40%] text-3xl font-bold flex items-center'>
                            <h1 className='flex items-center gap-7'>Enter ID <CiCircleQuestion /></h1>
                        </div>

                    </div>
                    <hr className='border border-solid' />
                    {/* USer ID */}
                    <div className='w-full h-[20%] mt-5'>
                        <div className='w-full h-[40%] text-xl flex items-center'>
                            <h1 className='flex items-center'>User ID <LuAsterisk className='text-xs mb-1 ml-1 text-red-500' /></h1>
                        </div>
                        <div className='w-full h-[60%] mt-1'>
                            <div>
                               <input type="text" className='w-full h-[40px] border rounded-[7px] flex items-center justify-center pl-5' placeholder='User ID' />
                            </div>
                        </div>
                    </div>
                    {/* Zone ID */}
                    <div className='w-full h-[20%] mt-5'>
                        <div className='w-full h-[40%] text-xl flex items-center'>
                            <h1 className='flex items-center'>Zone ID <LuAsterisk className='text-xs mb-1 ml-1 text-red-500' /></h1>
                        </div>
                        <div className='w-full h-[60%] mt-1'>
                            <div>
                               <input type="text" className='w-full h-[40px] border rounded-[7px] flex items-center justify-center pl-5' placeholder='Zone ID' />
                            </div>
                        </div>

                    </div>
                    {/* Check ID */}
                    <div className='w-full h-[20%] mt-5 flex items-center justify-end'>
                        <div className='w-[200px] h-[50px] flex items-center justify-end'>
                            <button className='w-[170px] h-[40px] rounded-[6px] flex items-center gap-3 justify-center shadow-2xl bg-gray-200'><FiUserCheck /> Check User ID</button>

                        </div>

                    </div>



                </div>

            </div>

        </div>
    </div>
  )
}

export default Checkout