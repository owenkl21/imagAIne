'use client'
import { signOut } from '@/app/actions/auth-actions';
import React from 'react'

const LogoutBtn = () => {
    const handleLogout = async () =>{
        signOut();
    }
  return (
    <span className='text-destructive' onClick={handleLogout}>
      Logout
    </span>
  )
}

export default LogoutBtn
