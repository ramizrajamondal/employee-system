import React, { useContext } from 'react'
import { authContext } from '../../context/AuthContext'
import { useState } from 'react'

function AdminData() {
  const [authdata, setauthData] = useContext(authContext)

  const [tasktitle, setTaskTitle] = useState('')
  const [taskdate, setTaskDate] = useState('')
  const [asignto, setAsignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const [createTask, setcreateTask] = useState({})
  
  const submitHandler = (e) => {
    e.preventDefault()
    setcreateTask({tasktitle,taskdate,category,description, active: false, newTask: true, failed: false, completed: false});
    const data = authdata
    data.forEach((elem) => {
      if(asignto == elem.firstName){
        elem.tasks.push(createTask);
        elem.taskCounts.newTask += 1; 
      }
    });
    setauthData(data)

    setTaskTitle('')
    setTaskDate('')
    setAsignTo('')
    setCategory('')
    setDescription('')
  }
  return (
    <div className='mt-12 bg-[#333]'>

      <div className='py-2 px-3'>

        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className='flex items-start justify-between'>
          <div className='w-1/3'>
            <div className='mt-5 w-full'>
              <h3 className='text-2xl font-normal'>Task Title</h3>
              <input value={tasktitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value)
                }}
                className='bg-transparent border-2 border-gray-300 rounded-sm 
        px-2 w-full
        'type="text" placeholder='Give a task' required />
            </div>

            <div className='mt-5 w-full'>
              <h3 className='text-2xl font-normal'>Date</h3>
              <input value={taskdate}
                onChange={(e) => {
                  setTaskDate(e.target.value)
                }}
                className='bg-transparent border-2 border-gray-300 rounded-sm 
        px-2 w-full' type="Date" required />
            </div>

            <div className='mt-5 w-full'>
              <h3 className='text-2xl font-normal'>Assign To</h3>
              <input value={asignto}
                onChange={(e) => {
                  setAsignTo(e.target.value)
                }}
                className='bg-transparent border-2 border-gray-300 rounded-sm 
        px-2 w-full
        'type="text" placeholder='employee name' required />
            </div>

            <div className='mt-5 w-full'>
              <h3 className='text-2xl font-normal'>Chetegory</h3>
              <input value={category}
                onChange={(e) => {
                  setCategory(e.target.value)
                }}
                className='bg-transparent border-2 border-gray-300 rounded-sm 
        px-2 w-full 
        'type="text" placeholder='design,dev etc' required />
            </div>

          </div>

          <div className='flex flex-col'>
            <h3>descrption</h3>
            <textarea value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
              className='bg-transparent border-2 border-gray-300' cols="75" rows="8"></textarea>
            <button className='py-2 px-2 text-xl rounded-lg
        text-white outline-none bg-emerald-600 mt-8
        hover:bg-emerald-800 duration-300'>
              Create Task</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default AdminData
