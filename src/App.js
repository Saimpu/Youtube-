// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Videos/Video.jsx'
import { useState } from 'react';


function App() {
  const [sidebar,setsidebar]=useState(true)
  return (
    <div>
		<NavBar setSidebar={setsidebar}/>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home sidebar={sidebar}/>}/>
      <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      
    </Routes>
    </BrowserRouter>
	</div>
  );
}

export default App;
