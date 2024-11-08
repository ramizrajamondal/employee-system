import React from 'react'

function CompleteTask({data}) {
  return (
    <div className='h-full w-[400px] bg-[#537780] flex-shrink-0 rounded-lg py-5'>
            <div className='flex justify-between px-4'>
                <h2 className='bg-red-600 rounded-sm py-2 px-5 text-lg'>{data.category}</h2>
                <h2 className='text-lg  text-black'>{data.taskDate}</h2>
            </div>
            <h1 className='px-5 text-2xl py-5 font-semibold text-black'>{data.taskTitle}</h1>
            <h4 className='py-2 px-5 text-lg leading-6 text-black'>{data.taskDescription}</h4>
            <div className='flex justify-center items-center mt-5'>
            <button className='bg-red-700 px-2 py-1 text-sm
            hover:bg-red-900 duration-300 rounded-lg'>
            Completed</button>
            </div>
        </div>
  )
}

export default CompleteTask
