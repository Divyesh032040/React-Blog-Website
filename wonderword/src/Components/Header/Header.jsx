/* eslint-disable no-unused-vars */
import React from 'react'
import { Container } from '../Index'
import {Logo} from '../Index'
import {LogoutBtn} from '../Index'
import { Link, useNavigate } from 'react-router-dom'
import {  useSelector } from 'react-redux'



function Header() {

  //get data is user is login from store  
  const authStatus = useSelector((state)=>{state.auth.status})
  //In React Router, useNavigate is a hook that provides a function to navigate to different pages within your React application. 

  const navigate = useNavigate()

  //array for navigate in diff page 

  //benefit : if w want a new button , we just need to add a new object in array and button will added 
  const navItems = [
    {
      name : 'Home',
      slug:'/',
      active:true
    },
    {
      name:'Login',
      slug:'/login',
      active: !authStatus
    },
    {
      name:'Signup',
      slug:'/signup',
      active:!authStatus
    },
    {
      name:'All Post',
      slug:'/all-post',
      active: authStatus
    },
    {
      name:'Add Post',
      slug:'/add-post',
      active:authStatus
    }
  ]

  return (
    <header className='py-3, shadow bg-gray-500'>
      <Container>
        <nav className='flex'>

          <div className='mr-4'>
            <Link to='/'>
              <Logo/>
            </Link>
          </div>
{/*her we create a common button where via map function , we apply on all object in navItems and button will created in unordered list as show below */}
          <ul className='flex ml-auto'>
          {navItems.map((item) =>
          item.active ? (

            <li key={item.name}>
              <button onClick={
                ()=>{navigate(item.slug)}
              } className='inline-block,px-6,py-2,duration-200,hover:bg-blue-100 rounded-full'>{item.name}</button>
            </li>

          ) : null 
          )}
          {/* if authStatus is tru than only code render inside ()  -> The syntax write her is called conditional rendering */}
          {authStatus && (
            <li><LogoutBtn/></li>                  
          )}
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header