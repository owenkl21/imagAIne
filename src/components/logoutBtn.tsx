'use client'
import { signOut } from '@/app/actions/auth-actions';
import React from 'react'

const LogoutBtn = () => {
    const handleLogout = async () =>{
        signOut();
    }
  return (
    <span onClick={handleLogout}>
      Logout Button
    </span>
  )
}

export default LogoutBtn
