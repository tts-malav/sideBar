import React from 'react';

const HeroSection = () => {
  return (
    <div className='bg-no-repeat bg-cover w-screen' style={{backgroundImage: "url(/images/heropic.png)"}}>
      <p className='text-white inline-block text-center text-5xl py-48'>
        Building connections,<br /> empowering construction futures
      </p>
      <p className='text-white text-center'>
        Connecting Construction Companies with Expert Contractors. Redefining Collaboration, One Project at a Time
      </p> 
    </div>
  );
}

export default HeroSection;
