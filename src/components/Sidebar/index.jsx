import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";


import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import  Button  from '@mui/material/Button';
import { MyContext } from '../../App';
import { FaUser } from "react-icons/fa";
const Sidebar = () => {

const[activeTab , setActiveTab] =useState(0);
const[isToggleSubmenu ,setIsToggleSubmenu]=useState(false)
const context =useContext(MyContext);
const isOpenSubmenu =(index) =>{
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
}

  return (
    <div className='sidebar'>
      <ul>
        <li>
            <Link to="/">
        <Button className={` w-100 ${activeTab === 0 ? 'active' :'' } `} onClick={() => isOpenSubmenu(0)}>
                <span className='icon'><MdDashboard/></span>
                Dashboard
                <span className='arrow'><FaAngleRight/></span>

            </Button>
            </Link>
        </li>

        <li>
            <Button className={` w-100 ${activeTab === 1   ? 'active' :'' } `} onClick={() => isOpenSubmenu(1)}>
                <span className='icon'>< FaProductHunt/></span>
                Products
                <span className='arrow'><FaAngleRight/></span>

            </Button>
            <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu === true ? 'colapse ' : 'colapsed'} `}>
                <ul className='submenu'>
                    <li> <Link to="productlist"> Product List</Link> </li>
                    <li> <Link to="producdetails"> Product View</Link> </li>
                    <li> <Link to="productupload"> Product Upload</Link> </li>
                </ul>
            </div>
        </li>

        <li>
            <Link to="/">
            <Button  className={` w-100 ${activeTab === 2 ?'active' :'' } `} onClick={() => isOpenSubmenu(2)}>
                <span className='icon'><FaCartShopping/></span>
                Orders
                <span className='arrow'><FaAngleRight/></span>

            </Button>
            </Link>
        </li>

        <li>
            <Link to="/">
            <Button className={` w-100 ${activeTab === 3 ?'active' :'' } `} onClick={() => isOpenSubmenu(3)}>
                <span className='icon'><MdMessage/></span>
                Messages
                <span className='arrow'><FaAngleRight/></span>

            </Button>
          </Link>
        </li>

        <li>
            <Link to="/">
            <Button className={` w-100 ${activeTab === 4 ?'active' :'' } `} onClick={() => isOpenSubmenu(4)}>
                <span className='icon'><FaBell/></span>
                Notifications
                <span className='arrow'><FaAngleRight/></span>

            </Button>
            </Link>
        </li>

        <li>
            <Link to="/">
            <Button className={` w-100 ${activeTab === 5 ?'active' :'' } `} onClick={() => isOpenSubmenu(5)}>
                <span className='icon'>< FaUser/></span>
                  <Link to="login" style={{textDecoration:"none"}}>Login</Link>
            </Button>
           </Link>
        </li>
      

        
        <li>
        <Button className={` w-100 ${activeTab === 6 ?'active' :'' } `} onClick={() => isOpenSubmenu(6)}>
                  <span className='icon'>< FaUser/></span>

                  <Link to="signup" style={{textDecoration:"none"}}>Sign Up</Link>

            </Button>
        </li>

        

        <li>
            <Link to="/">
            <Button  className={` w-100 ${activeTab === 7 ?'active' :'' } `} onClick={() => isOpenSubmenu(7)}>
            <span className='icon'><IoMdSettings/></span>
                Settings
              
              
                <span className='arrow'><FaAngleRight/></span>

            </Button>
            </Link>
        </li>

      

      
      

     
      
      </ul>
    
    <br/>
    <div className="logoutWrapper">
        <div className="logoutBox">
            <Button variant='contained'>< IoMdLogOut/>Logout</Button>
        </div>
    </div>
    </div>
  )
}

export default Sidebar;
