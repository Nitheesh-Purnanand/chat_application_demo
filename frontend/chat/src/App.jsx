import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Signuppage from './pages/Signuppage'
import Loginpage from './pages/Loginpage'
import Settingspage from './pages/settingspage'
import Profilepage from './pages/Profilepage'
const App = () => {
  
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/signup' element={<Signuppage/>}></Route>
          <Route path='/login' element={<Loginpage/>}></Route>
          <Route path='/settings' element={<Settingspage/>}></Route>
          <Route path='/profile' element={<Profilepage/>}></Route>
        </Routes>
    </div>
  )
}

export default App