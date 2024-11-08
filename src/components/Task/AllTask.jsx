import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function AllTask({data}) {

  return (
    <div id="AllTask" className='h-[55%] mt-10 py-5 flex gap-3 flex-nowrap overflow-auto'>
      {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return <AcceptTask key={idx} data={elem} />
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem} />
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem} />
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem} />
        }
      })}
    </div>
  )
}

export default AllTask
