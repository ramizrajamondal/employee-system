import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { authContext } from './context/AuthContext'

function App() {
  
  const [user, setUser] = useState("")
  const [loggedInUser, setloggedInUser] = useState("")
  const [authData, setauthData] = useContext(authContext)
  
  useEffect(()=>{
    const loggedUser = localStorage.getItem("loggedUser")
    if(loggedUser){
      const loggedData = JSON.parse(loggedUser)
        setUser(loggedData.role)
        setloggedInUser(loggedData.data)
      }  
    
  },[])

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser('admin')
      localStorage.setItem("loggedUser",JSON.stringify({role: 'admin'}))
    }
    else if (authData){
      const employee = authData.find((e)=>email == e.email && password == e.password)
      if(employee){
        setUser('employee')
        setloggedInUser(employee)
        localStorage.setItem("loggedUser",JSON.stringify({role: 'employee',data: employee}))
      }
      
    }
    else {
      alert("Invalid Components")
    }
  }  
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> : (user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUser}/> : null)}
    </>
  )
}

export default App
