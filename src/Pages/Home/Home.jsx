import React, { useState } from 'react'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {
  const [category,setcategory]=useState(0)
  return (
    <>
      <SideBar SideBar={sidebar} category={category} setcategory={setcategory}/>
      <div className={`container ${sidebar?"":'large-container'}`}> 
          <Feed category={category}/>
      </div>
    </>
  )
}

export default Home
