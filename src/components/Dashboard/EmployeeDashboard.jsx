import React from 'react'
import Header from '../Header/Header'
import TaskElem from '../TaskElement/TaskElem'
import AllTask from '../Task/AllTask'

function EmployeeDashboard(props) {
  return (
    <div className='py-16 px-16 bg-[#1c1c1c] h-screen'>
      <Header changeUser={props.changeUser} />
      <TaskElem data={props.data} />
      <AllTask data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
