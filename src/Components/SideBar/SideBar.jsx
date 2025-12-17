import React from 'react'
import  './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobile from '../../assets/sports.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
const SideBar = ({SideBar,category,setcategory}) => {
  return (
    <div className={`SideBar ${SideBar?"":"small-sidebar"}`}>
		<div className='sortcut-links'>
			<div className={`sidelink ${category===0?"active":""}`} onClick={()=>{setcategory(0)}}>
				<img src={home} alt="" /><p>Home</p>
			</div>
			<div className={`sidelink ${category===20?"active":""}`} onClick={()=>{setcategory(20)}}>
				<img src={game_icon} alt="" /><p>Gamming</p>
			</div>
			<div className={`sidelink ${category===2?"active":""}`} onClick={()=>{setcategory(2)}}>
				<img src={automobile} alt="" /><p>Automobiles</p>
			</div>
			<div className={`sidelink ${category===17?"active":""}`} onClick={()=>{setcategory(17)}}>
				<img src={sports} alt="" /><p>Sports</p>
			</div>
			<div className={`sidelink ${category===24?"active":""}`} onClick={()=>{setcategory(24)}}>
				<img src={entertainment} alt="" /><p>Entertaiment</p>
			</div>
			<div className={`sidelink ${category===28?"active":""}`} onClick={()=>{setcategory(28)}}>
				<img src={tech} alt="" /><p>Technology</p>
			</div>
			<div className={`sidelink ${category===10?"active":""}`} onClick={()=>{setcategory(10)}}>
				<img src={blogs} alt="" /><p>Blogs</p>
			</div>
			<div className={`sidelink ${category===22?"active":""}`} onClick={()=>{setcategory(22)}}>
				<img src={news} alt="" /><p>News</p>
			</div>
			<div className={`sidelink ${category===25?"active":""}`} onClick={()=>{setcategory(25)}}>
				<img src={music} alt="" /><p>Music</p>
			</div>
			<hr />
		</div>
		<div className="subscribelist">
			<h3>Subscribed</h3>
			<div className='sidelinks'>
				<img src={jack} alt="" /><p>Karthik</p>
			</div>
			<div className='sidelinks'>
				<img src={simon} alt="" /><p>Riyaz</p>
			</div>
			<div className='sidelinks'>
				<img src={tom} alt="" /><p>Khasim</p>
			</div>
			<div className='sidelinks'>
				<img src={megan} alt="" /><p>5-minut Craft</p>
			</div>
			<div className='sidelinks'>
				<img src={cameron} alt="" /><p>cameron</p>
			</div>
		</div>
      
    </div>
  )
}
export default SideBar
