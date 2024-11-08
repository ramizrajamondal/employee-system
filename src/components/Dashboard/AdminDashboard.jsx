import React from 'react'
import Header from '../Header/Header'
import AdminData from '../AdminDetails/AdminData'
import ShowTask from '../ShowAdminTask/ShowTask'
function AdminDashboard(props) {
  return (
    <div className='py-5 px-8 bg-[#1c1c1c] h-screen'>
      <Header changeUser={props.changeUser} />
      <AdminData />
      <ShowTask />
    </div>
  )
}

export default AdminDashboard
