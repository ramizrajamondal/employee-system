import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const authContext = createContext()

function AuthContext({ children }) {
  const [userdata, setuserData] = useState('')
  useEffect(() => {
    setLocalStorage()
    const { employees } = getLocalStorage()
    setuserData( employees )
  }, [])

  return (
    <div>
      <authContext.Provider value={[userdata, setuserData]}>
        {children}
      </authContext.Provider>
    </div>
  )
}

export default AuthContext
