import React from 'react'

function TaskElem({data}) {
  return (
    <div className='flex gap-5 mt-10'>
      <div className='w-[25%] bg-[#beba57] p-10 rounded-lg hover:scale-105 duration-200'>
           <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
           <h1 className='text-xl font-medium'>New Task</h1>
      </div>
      <div className='w-[25%] bg-[#FFDDAE] p-10 rounded-lg hover:scale-105 duration-200'>
           <h2 className='text-3xl text-black font-semibold'>{data.taskCounts.completed}</h2>
           <h1 className='text-xl text-black font-medium'>Completed Task</h1>
      </div>
      <div className='w-[25%] bg-[#7d6fb1] p-10 rounded-lg hover:scale-105 duration-200'>
           <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
           <h1 className='text-xl font-medium'>Active Task</h1>
      </div>
      <div className='w-[25%] bg-[#537780] p-10 rounded-lg hover:scale-105 duration-200'>
           <h2 className='text-3xl text-black font-semibold'>{data.taskCounts.failed}</h2>
           <h1 className='text-xl text-black font-medium'>Failed Task</h1>
      </div>
    </div>
  )
}

export default TaskElem
