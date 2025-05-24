import React from 'react'
import { useAuthstore } from '../store/useauthstore'

const Navbar = () => {
    const {authUser} = useAuthstore
  return (
    <div>Navbar</div>
  )
}

export default Navbar