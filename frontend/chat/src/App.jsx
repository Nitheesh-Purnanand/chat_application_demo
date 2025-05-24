import React, { useEffect } from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Signuppage from './pages/Signuppage'
import Loginpage from './pages/Loginpage'
import Settingspage from './pages/settingspage'
import Profilepage from './pages/Profilepage'
import { useAuthstore } from './store/useauthstore'
import {Loader} from "lucide-react"
const App = () => {
  const {authUser,checkAuth,ischecking} = useAuthstore()
  useEffect(()=>{
    checkAuth()
  },[checkAuth]);
  console.log({authUser})

  if(ischecking && !authUser) return(
    <div className='flex items-center justify-center h-screen'>
      <Loader className="size-10 animate-spin"/>
    </div>
  )
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={authUser ? <Homepage/> : <Navigate to={"/login"}/>}></Route>
          <Route path='/signup' element={!authUser ? <Signuppage/> : <Navigate to={"/"}/>}></Route>
          <Route path='/login' element={<Loginpage/>}></Route>
          <Route path='/settings' element={<Settingspage/>}></Route>
          <Route path='/profile' element={authUser ? <Profilepage/>:<Navigate to={"/login"}/>}></Route>
        </Routes>
    </div>
  )
}

export default App