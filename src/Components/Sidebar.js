import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [open, setopen] = useState(true);
  const navigate = useNavigate();

  const handlePageClick = (page) => {
    navigate(`/${page}`);
  };
  
  return (
    <>
    <div className='flex'>
      <div className={`${open ? 'w-72' : 'w-20'} duration-300 bg-slate-800 flex flex-col h-screen px-4 py-2 pt-8 relative`}>
        <img className={`${open ? 'h-24' : 'h-12 w-12'} my-4`} src='images/account.svg' alt=''/>
        <img className={`-right-[0.85rem] top-10 cursor-pointer rounded-full h-10 absolute ${!open && 'rotate-180 h-8'}`} onClick={() => setopen(!open)} src='images/left.svg' alt=''/>
        <p className={`flex items-center justify-center text-white text-xl ${!open && 'hidden'} font-bold`}>Malav Shah</p>
        <p className={`flex items-center justify-center text-gray-300 text-lg font-normal ${!open && 'hidden'}`}>Malav.shah@neevay.com</p>
        <button className={`bg-slate-500 hover:bg-slate-300 border border-black rounded-lg justify-center py-[0.9rem] flex items-center space-x-2 my-8 ${!open && 'hidden'}`}>
          <img className={`h-4`} src='images/logout.svg' alt=''/>
          <p className='font-medium'>Logout</p>
        </button>
        <div className={`flex ${!open ? 'flex-col space-y-2' : 'flex-row space-x-6'} pb-8 border-b border-b-slate-400 justify-center`}>
          <button className='hover:bg-slate-400 p-2 rounded-xl'>
            <img className={`h-8 ${!open && 'w-min'}`} src='images/apps.svg' alt='' />
          </button>
          <button className='hover:bg-slate-400 p-2 rounded-xl'>
            <img className={`h-8 ${!open && 'w-min'}`} src='images/bell.svg' alt='' />
          </button>
          <button className='hover:bg-slate-400 p-2 rounded-xl'>
            <img className={`h-8 ${!open && 'w-min'}`} src='images/help.svg' alt='' />
          </button>
        </div>
        <div className={`py-4 flex flex-col ${!open && 'items-center'}`}>
          <button className={`rounded-md py-2 hover:bg-slate-400 my-1 flex ${open && 'space-x-4'} items-center`} 
            onClick={() => handlePageClick('about')}>
            <p></p>
            <img className='h-8' src='images/accounts.svg' alt='' />
            <p className={`${!open && 'hidden'} text-white font-semibold`}>About</p>
          </button>
          <button className={`rounded-md py-2 hover:bg-slate-400 my-1 flex ${open && 'space-x-4'} items-center`}
           onClick={() => handlePageClick('projects')}>
            <p></p>
            <img className='h-8' src='images/projects.svg' alt='' />
            <p className={`${!open && 'hidden'} text-white font-semibold`}>Projects</p>
          </button>
          <button className={`rounded-md py-2 hover:bg-slate-400 my-1 flex ${open && 'space-x-4'} items-center`}
           onClick={() => handlePageClick('we')}>
            <p></p>
            <img className='h-8' src='images/work.svg' alt='' />
            <p className={`${!open && 'hidden'} text-white font-semibold`}>Work Experience</p>
          </button>
          <button className={`rounded-md py-2 hover:bg-slate-400 my-1 flex ${open && 'space-x-4'} items-center`}
           onClick={() => handlePageClick('tasks')}>
            <p></p>
            <img className='h-8' src='images/tasks.svg' alt='' />
            <p className={`${!open && 'hidden'} text-white font-semibold`}>Tasks</p>
          </button>
          <button className={`rounded-md py-2 hover:bg-slate-400 my-1 flex ${open && 'space-x-4'} items-center`}
           onClick={() => handlePageClick('contact')}>
            <p></p>
            <img className='h-8' src='images/contact.svg' alt='' />
            <p className={`${!open && 'hidden'} text-white font-semibold`}>Contact</p>
          </button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Sidebar