import React from 'react'

function NewTask({data}) {
  return (
    <div className='h-full w-[400px] bg-[#beba57] flex-shrink-0 rounded-lg py-5'>
            <div className='flex justify-between px-4'>
                <h2 className='bg-red-600 rounded-sm py-2 px-5 text-lg'>{data.category}</h2>
                <h2 className='text-lg'>{data.taskDate}</h2>
            </div>
            <h1 className='px-5 text-2xl py-5 font-semibold'>{data.taskTitle}</h1>
            <h4 className='py-2 px-5 text-lg leading-6'>{data.taskDescription}</h4>
            <div className='flex justify-around mt-5'>
            <button className='bg-green-700 px-2 py-1 text-sm
            hover:bg-green-900 duration-300 rounded-lg'>
            Mark as Completed</button>
            <button className='bg-red-700 px-2 py-1 text-sm
            hover:bg-red-900 duration-300 rounded-lg'>
            Mark as Failed</button>
            </div>
        </div>
  )
}

export default NewTask
