import React from 'react'
import './homepage.css'

const Homepage = ({setLoginUser})=>{
    return(
        <div>
        <div className='homepage'>
           <h1>Homepage</h1> 
           <div className='button'onClick={()=> setLoginUser({})}>LogOut</div>
           </div>
    
            </div>
    )
}
export default Homepage
