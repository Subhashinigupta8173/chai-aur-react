import './leftside.css';
import React from 'react';
import logo from '../assests/logo.png';
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MapsUgcSharpIcon from '@mui/icons-material/MapsUgcSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
const Leftside = () => {
  return (
    <div className="leftSidePart">
      <div className="logoPart">
        <img classname='logoImg' src={logo} alt="logo" />
      </div>
      <div className="navLinkPart">
      <Link to="/"  className="linkStyle">
        <div className="navLink">
          <HomeIcon sx={{ fontSize: "40px", margin: "0 20px 0 0" }} />
          <div className="navName">Home</div>
        </div>
        </Link>
        <div className="navLink">
          <SearchIcon sx={{ fontSize: "40px", margin: "0 20px 0 0" }} />
          <div className="navName">Search</div>
        </div>
        {/* <div className="navLink"> 
            <ExploreIcon  sx={{fontSize:"40px",margin:"0 20px 0 0"}}/>
            <div className="navName">Explore</div>
          </div>  */}
        {/* <div className="navLink">
          <VideoLibraryIcon sx={{ fontSize: "40px", margin: "0 20px 0 0" }} />
          <div className="navName">Reel</div>
        </div> */}
        <Link to="/chat/RadgaGupta"  className="linkStyle">
          <div className="navLink">
            <MapsUgcSharpIcon sx={{ fontSize: "40px", margin: "0 20px 0 0" }} />
            <div className="navName">Messages</div>
          </div>
        </Link>
        <div className="navLink">
          <NotificationsIcon sx={{ fontSize: "40px", margin: "0 20px 0 0" }} />
          <div className="navName">Notifications</div>
        </div>
        {/* m */}
        <Link to="/profile/Nisha" className="linkStyle">
          <div className="navLink" >
            <AccountCircleSharpIcon sx={{ fontSize: "40px", margin: "0 20px 0 0" }} />
            <div className="navName">Profile</div>
          </div>
        </Link>
        <div className="navLink">
          <MenuSharpIcon sx={{ fontSize: "40px", margin: "0 20px 0 0" }} />
          <div className="navName">More</div>
        </div>
      </div>
    </div>
  )
}

export default Leftside