/* eslint-disable no-unused-vars */
import React from 'react'
import {useDispatch} from 'react-redux'
import  authService from '../../AppWrite/Auth'
import { login, logout} from '../../Store/authSlice'


function LogoutBtn() {
  const dispatch = useDispatch()
 const logoutHandler = ()=>{
     authService.logOut().then(()=>{
      dispatch(logout())
     }).catch(()=>{
      throw new Error('Something bad happened.');
     })
 }
  return (
    //conditional rendering 
  
    <button className='inline-block px-6 hover:bg-blue-100 duration-200 rounded-full'>Logout</button>
  )
}

export default LogoutBtn