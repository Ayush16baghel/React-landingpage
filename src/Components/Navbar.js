import React, { useState } from 'react'
import Logo from "../Assets/gravitiss-logo.png";
import { Link } from 'react-router-dom';
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box,
Drawer,
List,
ListItem,
ListItemButton,
ListItemIcon,
ListItemText, } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [

{
    text:"Home",
    icon:<HomeIcon/>,
},
{
    text:"About",
    icon:<InfoIcon/>,
},

{
    text:"Contact",
    icon:<PhoneRoundedIcon/>,
},

];
const navigate = useNavigate()

  return (
    <nav >
        <div className='nav-logo-container'>
       <img  className='nav-logo' src={Logo} alt="" />
        </div>
        <div className='navbar-links-container' >
            
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/products">Products</Link>
           
            <button onClick={()=> navigate(Payment)} className='primary-button' >Buy Now </button>
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={() => setOpenMenu(true) }/>
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
       anchor="right">
        <Box sx={{width:250 }}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}>
            <List>
                {menuOptions.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
        </Drawer>
    </nav>
  )
}

export default Navbar