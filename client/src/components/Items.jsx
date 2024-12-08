import React from 'react';


const Items = ({ icon, title, desc }) => {
  return (
    <div className='w-ful h-40 m-2 rounded-lg shadow-xl bg-slate-100 border text-black flex items-center justify-between px-4 hover:scale-[1.009] duration-300 '>
      <div className='mr-10'>
        <img className="w-12 h-12 mb-2" src={icon} alt="icon" />
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p className='text-md text-gray-500'>{desc}</p>
      </div>
    </div>
  );
};

export default Items;
