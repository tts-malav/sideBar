import React, { useState } from 'react'

const Sidebar = () => {
  const [open, setopen] = useState(true);
  
  return (
    <>
    <div className='flex'>
      <div className={`${open ? 'w-72' : 'w-20'} duration-300 bg-slate-700 flex flex-col  h-screen px-4 py-2 w-72 pt-8 relative`}
        
      >
        <img className={`h-24 my-4`} src='account.svg' alt=''/>
        <img className={`-right-[0.85rem] top-10 cursor-pointer rounded-full h-10 absolute ${!open && 'rotate-180'}`} onClick={() => setopen(!open)} src='left.svg' alt=''/>
        <p className={`flex items-center justify-center text-white text-xl ${!open && 'scale-0'} font-bold`}>Malav Shah</p>
        <p className={`flex items-center justify-center text-gray-300 text-lg font-normal ${!open && 'scale-0'}`}>Malav.shah@neevay.com</p>
        <button className={`bg-slate-400 border border-black rounded-lg justify-center py-[0.9rem] flex items-center space-x-2 my-8 ${!open && 'scale-0'}`}>
          <img className={`h-4`} src='logout.svg' alt=''/>
          <p className='font-medium'>Logout</p>
        </button>
      </div>
      <div className='p-7 text-2xl font-semibold flex-1 h-screen '>
        Home
      </div>
    </div>
      
    </>
  )
}

export default Sidebar