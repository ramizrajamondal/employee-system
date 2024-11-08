import React from 'react'

function Header(props) {
  const logOutHandler = () => {
      localStorage.setItem('loggedUser','')
      props.changeUser('')
  }
  return (
    <>
    <div className='flex justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/> 
        <span className='text-2xl font-normal px-5'>🖐️User</span>
        </h1>
        <button onClick={logOutHandler}
        className='bg-indigo-600 rounded-md px-5 py-0 font-light
        text-2xl shadow-lg  shadow-indigo-500/50  hover:bg-indigo-800 duration-200'
        >Log Out</button>
    </div>
    </>
  )
}

export default Header
