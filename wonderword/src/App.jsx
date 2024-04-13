/* eslint-disable no-unused-vars */

import { useState , useEffect} from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './AppWrite/Auth'
import {login , logout} from './Store/authSlice'
import {Footer,Header} from './Components/Index.js'


function App() {
  
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch() //use to send data from component to store                                         

  //check user is login or not 
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
    .finally(()=>{setLoading(false)})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-grey-500 w-screen'>
  <div>
    <Header/>
    <main>
     
    </main>
    <Footer/>
  </div>
</div>
) : null

}

export default App
