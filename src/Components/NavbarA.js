import React from 'react'

const NavbarA = () => {
  return (
    <div className='px-4 py-3 flex bg-teal-950 w-screen fixed justify-between items-center'>
        <img src='logoN.svg' alt='' />
        <div className='flex pr-24 space-x-4'>
            <button className='lg:block hidden  text-white font-bold px-2 py-1 rounded-xl hover:bg-white hover:text-black'>
                About Us
            </button>
            <button className='lg:block hidden text-white font-bold px-2 py-1 rounded-xl hover:bg-white hover:text-black'>
                Register as Vendor
            </button>
            <button className=' text-white font-bold px-2 py-1 rounded-xl hover:bg-white hover:text-black'>
                Sign In
            </button>
            <button className=' text-white font-bold bg-green-700 px-2 py-1 rounded-xl hover:bg-green-600'>
                Get Started Free
            </button>
        </div>

    </div>
  )
}

export default NavbarA