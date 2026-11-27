// import React from 'react'
// import banner from '../assets/banner.png'

// const Banner = () => {
//   return (
//     <div>
//         <div className='w-full h-[530px] flex justify-center mt-[40px]'>
//             <div className='w-[80%] h-[500px]'>
//                 <img className='object-contain w-full h-full object-cover block rounded-2xl shadow-2xl' src={banner} alt="" />
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Banner

import React from 'react'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <div className="w-full flex justify-center mt-6 sm:mt-10 px-4 sm:px-0">
      <div className="w-full sm:w-[90%] lg:w-[80%]">
        <img
          className="w-full h-auto max-h-[500px] object-cover block rounded-2xl shadow-2xl"
          src={banner}
          alt="banner"
        />
      </div>
    </div>
  )
}

export default Banner