import React, { useContext } from 'react'
import logo from "../../images/images.png"
import User from "../../images/user.png"
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from '../SearchBox';
import { MdOutlineLightMode } from "react-icons/md";

import { MdDarkMode } from "react-icons/md";
import { IoIosCart } from "react-icons/io";

import { MdOutlineMail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { MyContext } from '../../App';




const Header = () => {
    const context = useContext(MyContext)

    return (
        <>
            <header className='d-flex align-items-center'>
                <div className='container-fluid w-100'>
                    <div className='row d-flex align-items-center'>
                        {/* Logo  */}
                        <div className="col-sm-2 part1">
                            <Link to={"/"} className='logo d-flex align-items-center'>
                                <img src={logo} />
                                <span className='ml-2'>GARDEN</span>


                            </Link>
                        </div>


                        <div className="col-sm-3   d-flex align-items-center part2 pl-4">
                            <button className='rounded-circle mr-3' onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}>
                                {
                                    context.isToggleSidebar === false ? <MdMenuOpen /> :
                                        <MdOutlineMenu />


                                }
                            </button>
                            <SearchBox />
                        </div>



                        <div className="col-sm-7 d-flex align-items-center justify-content-end  part3 ">
                            <Button className='rounded-circle '>< MdOutlineLightMode /></Button>
                            <Button className='rounded-circle '><IoIosCart /></Button>
                            <Button className='rounded-circle '><MdOutlineMail /></Button>
                            <Button className='rounded-circle'><FaRegBell /></Button>
{
    context.isLogin !==false ? 
   <Link to={"/login"}> <Button className='btn-blue btn-lg' style={{background:"blue" ,color:"white" ,borderRadius:"5px" ,marginLeft:"20px"}}>Sing In</Button>
</Link>

    :
    
    <div className="MyAccWrapper">
    <Button className="myAcc align-item-center">
        <div className="userImg">
            <span className="rounded-circle">
                <img src={User} alt="" width={30} style={{ borderRadius: "50px" }} />
            </span>
        </div>
    </Button>
    <div className="userInfo">
        <h4>Surendra</h4>
        <p className='mb-0'>skbmzp365@gmail.com</p>
    </div>
</div>

}


                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header;


