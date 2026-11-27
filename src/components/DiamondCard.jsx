// import React from "react";
// import { BsStars } from "react-icons/bs";
// import { FaStar } from "react-icons/fa6";
// import wl from '../assets/weekly.png'
// import {recommendedData} from '../data/Rcm'
// import { FaFire } from "react-icons/fa";  
// import {productsData} from '../data/hot'
// import {packages} from '../data/diamond'

// const DiamondCard = () => {
//   return (
//     <div>
//       <div className="w-full h-auto mt-5 mb-10 flex justify-center">
//         <div className="w-[80%] h-auto pb-10 flex justify-center bg-white rounded-2xl shadow-2xl">
//           <div className="w-[95%] h-full">
//             <div className="w-full h-[90px] flex justify-center items-center">
//               <div className="w-full h-[40px] text-3xl font-bold flex items-center">
//                 <h1 className="flex items-center gap-7">
//                   Select a Package
//                 </h1>
//               </div>
//             </div>
//             <hr className='border border-solid' />
//             {/* Recomment */}
//             <div className="w-full h-auto mt-5">
//               <div className="w-full h-[60px] flex items-center">
//                 <div className="w-full h-[30px] text-xl font-bold text-amber-500">
//                   <h1 className="flex items-center gap-3"><BsStars className="text-2xl"/> Recommended for You</h1>

//                 </div>

//               </div>
//               {/* cardrecomment */}
//               <div className="w-full h-auto flex items-center gap-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
//                 {recommendedData.map((item) => (
//                 <div className="w-[250px] h-[110px] flex  rounded-2xl bg-amber-50 border border-amber-300 shadow-2xl hover:shadow-amber-400 hover:shadow-lg transition-all duration-200 ease-in-out ">
//                 {/* title */}
//                   <div className="w-[145px] h-full mt-5 ml-5 ">
//                     <div className="w-full h-auto ">
//                       <h1 className="font-bold">{item.title}</h1>
//                     </div>
//                     {/* price */}
//                     <div className="w-full h-auto">
//                       <h1 className="text-amber-500 font-bold">{item.price}</h1>
//                     </div>

//                   </div>
                  
//                   <div className="w-[105px] h-full ">
//                     <div className="h-[30px] w-full flex justify-end ">
//                       <div className="w-[55px] h-[25px] rounded-bl-2xl rounded-tr-2xl flex justify-center items-center shadow-lg shadow-amber-200 bg-amber-400">
//                         <h1 className="font-bold text-white flex items-center gap-1 text-[14px]"><FaStar /> TOP</h1>

//                       </div>

//                     </div>
//                       <div className="w-full h-[75px] flex justify-center items-center">
//                         <div className="w-[60px] h-[65px] rounded-[75%] bg-amber-200 hover:bg-amber-300 transition-all duration-300 ease-in-out">
//                           <img className="w-full h-full object-contain pr-1 mt-1" src={item.image} alt="" />

//                         </div>

//                       </div>
                    

//                   </div>


//                 </div>
//                 ))}

//               </div>

//             </div>
//             <hr className="mt-10 text-gray-300"/>

//             {/* Hot Item */}
//             <div className="w-full h-auto mt-5">
//               {/* title */}
//               <div className="w-full h-[60px] flex items-center">
//                 <div className="w-full h-[30px] text-xl font-bold text-red-600">
//                   <h1 className="flex items-center gap-3"><FaFire className="text-2xl"/> Hot Item</h1>

//                 </div>

//               </div>
//               {/* Hot Card */}
//               <div className="w-full h-auto flex items-center gap-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
//                 {productsData.map((item) => (
//                 <div className="w-[250px] h-[90px] flex  rounded-2xl bg-red-50 border border-red-200  hover:shadow-red-400 hover:shadow-lg transition-all duration-200 ease-in-out ">
//                 {/* title */}
//                   <div className="w-[145px] h-full mt-2 ml-4 ">
//                     <div className="w-full h-auto ">
//                       <h1 className="font-bold">{item.title}</h1>
//                     </div>
//                     {/* price */}
//                     <div className="w-full h-auto">
//                       <h1 className="text-gray-400 ">{item.price}</h1>
//                     </div>

//                   </div>
                  
//                   <div className="w-[105px] h-full flex justify-center items-center ">
//                       <div className="w-full h-[105px] flex justify-center items-center">
//                         <div className="w-[60px] h-[65px] rounded-[75%] bg-red-200 hover:bg-red-400 transition-all duration-300 ease-in-out">
//                           <img className="w-full h-full object-contain pr-1 mt-1" src={item.image} alt="" />

//                         </div>

//                       </div>
                    

//                   </div>


//                 </div>
//                 ))}

//               </div>

//             </div>
//             <hr className="mt-10 text-gray-300"/>

//             {/* diamond */}
//             <div className="w-full h-auto mt-5">
//               {/* title */}
//               {/* <div className="w-full h-[60px] flex items-center">
//                 <div className="w-full h-[30px] text-xl font-bold text-red-600">
//                   <h1 className="flex items-center gap-3"><FaFire className="text-2xl"/> Hot Item</h1>

//                 </div>

//               </div> */}
//               {/* diamond Card */}
//               <div className="w-full h-auto flex items-center gap-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
//                 {packages.map((item) => (
//                 <div className="w-[250px] h-[70px] flex  rounded-xl border border-gray-200 bg-white  hover:bg-red-50 hover:shadow-lg transition-all duration-200 ease-in-out ">
//                 {/* title */}
//                   <div className="w-[145px] h-full mt-2 ml-4 ">
//                     <div className="w-full h-auto ">
//                       <h1 className="font-bold">{item.title}</h1>
//                     </div>
//                     {/* price */}
//                     <div className="w-full h-auto">
//                       <h1 className="text-gray-400">{item.price}</h1>
//                     </div>

//                   </div>
                  
//                   <div className="w-[105px] h-full flex justify-center items-center ">
//                       <div className="w-full h-[105px] flex justify-center items-center">
//                         <div className="w-[60px] h-[65px] ">
//                           <img className="w-full h-full object-contain " src={item.image} alt="" />

//                         </div>

//                       </div>
                    

//                   </div>


//                 </div>
//                 ))}

//               </div>

//             </div>
            
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default DiamondCard;



import React from "react";
import { BsStars } from "react-icons/bs";
import { FaStar, FaFire } from "react-icons/fa";
import { recommendedData } from '../data/Rcm'
import { productsData } from '../data/hot'
import { packages } from '../data/diamond'

const grid = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5";

const DiamondCard = () => {
  return (
    <div className="w-full mt-5 mb-10 flex justify-center px-4 sm:px-0">
      <div className="w-full sm:w-[90%] lg:w-[80%] bg-white rounded-2xl shadow-2xl p-4 sm:p-6 pb-10">
        <h1 className="text-2xl sm:text-3xl font-bold pb-4 border-b">Select a Package</h1>

        {/* Recommended */}
        <section className="mt-5">
          <h2 className="flex items-center gap-3 text-lg sm:text-xl font-bold text-amber-500 mb-4">
            <BsStars className="text-2xl" /> Recommended for You
          </h2>
          <div className={grid}>
            {recommendedData.map((item, i) => (
              <div
                key={i}
                className="w-full min-h-[110px] flex justify-between rounded-2xl bg-amber-50 border border-amber-300 shadow-2xl hover:shadow-amber-400 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex flex-col justify-center pl-4 py-3 min-w-0">
                  <h3 className="font-bold truncate">{item.title}</h3>
                  <p className="text-amber-500 font-bold">{item.price}</p>
                </div>

                <div className="flex flex-col items-end shrink-0">
                  <div className="w-[55px] h-[25px] rounded-bl-2xl rounded-tr-2xl flex justify-center items-center shadow-lg shadow-amber-200 bg-amber-400">
                    <span className="font-bold text-white flex items-center gap-1 text-[14px]">
                      <FaStar /> TOP
                    </span>
                  </div>
                  <div className="w-[60px] h-[65px] mx-6 my-1 rounded-[75%] bg-amber-200 hover:bg-amber-300 transition-all duration-300">
                    <img className="w-full h-full object-contain pr-1 mt-1" src={item.image} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="mt-10 text-gray-300" />

        {/* Hot Item */}
        <section className="mt-5">
          <h2 className="flex items-center gap-3 text-lg sm:text-xl font-bold text-red-600 mb-4">
            <FaFire className="text-2xl" /> Hot Item
          </h2>
          <div className={grid}>
            {productsData.map((item, i) => (
              <div
                key={i}
                className="w-full min-h-[90px] flex items-center justify-between px-4 py-2 rounded-2xl bg-red-50 border border-red-200 hover:shadow-red-400 hover:shadow-lg transition-all duration-200"
              >
                <div className="min-w-0">
                  <h3 className="font-bold truncate">{item.title}</h3>
                  <p className="text-gray-400">{item.price}</p>
                </div>
                <div className="w-[60px] h-[65px] shrink-0 rounded-[75%] bg-red-200 hover:bg-red-400 transition-all duration-300">
                  <img className="w-full h-full object-contain pr-1 mt-1" src={item.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="mt-10 text-gray-300" />

        {/* Diamond packages */}
        <section className="mt-5">
          <div className={grid}>
            {packages.map((item, i) => (
              <div
                key={i}
                className="w-full min-h-[70px] flex items-center justify-between px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-red-50 hover:shadow-lg transition-all duration-200"
              >
                <div className="min-w-0">
                  <h3 className="font-bold truncate">{item.title}</h3>
                  <p className="text-gray-400">{item.price}</p>
                </div>
                <div className="w-[50px] h-[50px] shrink-0">
                  <img className="w-full h-full object-contain" src={item.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiamondCard;