import React, { useContext } from 'react'
import { authContext } from '../../context/AuthContext'

function ShowTask() {
  const [authdata, setauthData] = useContext(authContext)

  return (
    <div id="ShowTask" className='mt-5 p-5 bg-[#333] rounded h-60'>
     <div className=' flex mb-2 justify-between py-3 px-4 rounded'>
      <h3 className='w-1/5'>Employee Name</h3> 
      <h3 className='w-1/5'>Active</h3>
      <h3 className='w-1/5'>New Task</h3>
      <h3 className='w-1/5'>Completed</h3>
      <h3 className='w-1/5'>Failed</h3>
      </div> 
    <div id="taslistkdiv" className='h-[80%] overflow-auto'>
    {authdata.map(function(ele,idx){
      return <div key={idx} className='flex mb-2 border-2 border-emerald-600 justify-between py-3 px-5 rounded'>
      <h3 className='w-1/5 font-medium text-red-400'>{ele.firstName}</h3>
      <h3 className='w-1/5 font-medium text-yellow-400'>{ele.taskCounts.newTask}</h3>
      <h3 className='w-1/5 font-medium text-green-400'>{ele.taskCounts.active}</h3>
      <h3 className='w-1/5 font-medium text-orange-600'>{ele.taskCounts.completed}</h3>
      <h3 className='w-1/5 font-medium text-emerald-600'>{ele.taskCounts.failed}</h3>
      </div>
    })}
    </div>

  </div>
  )
}

{/* <div className='bg-yellow-500 flex justify-between mb-2 py-3 px-4 rounded'>
<h2>ramiz</h2>
<h3>Make a web app</h3>
<h5>Pending</h5>
</div>

<div className='bg-blue-500 mb-2 flex justify-between py-3 px-4 rounded'>
<h2>ramiz</h2>
<h3>Make a web app</h3>
<h5>Pending</h5>
</div>

<div className='bg-green-500 mb-2 flex justify-between py-3 px-4 rounded'>
<h2>ramiz</h2>
<h3>Make a web app</h3>
<h5>Pending</h5>
</div> */}

export default ShowTask
