import React from 'react'
import './NavBar.css'
import Menu from '../../assets/menu.png'
import youtube from '../../assets/youtube2.png'
import Search from '../../assets/search.png'
import Upload from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import Notification from '../../assets/notification.png'
import Profile_icon from '../../assets/jack.png'

const NavBar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu_icon' onClick={()=>{
                setSidebar(prev=>prev===false?true:false)
            }} src={Menu} alt="" />
            <img className='logo' src={youtube} alt="" />
        </div>
        <div className='nav-middle flex-div'>
            <div className="search-box flex-div">
                <input type="text" placeholder='Search' />
                <img src={Search} alt="" />
            </div>
        </div>
        <div className="nav-right flex-div">
            <img src={Upload} alt="" />
            <img src={more_icon} alt="" />
            <img src={Notification} alt="" />
            <img src={Profile_icon} className='User-icon' alt="" />
        </div>
    </nav>
  )
}

export default NavBar


