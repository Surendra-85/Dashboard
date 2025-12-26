import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../App';
import logo from '../../images/images.png'
import { MdEmail } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from '@mui/material/Button'
import Google from '../../images/google.png'
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { IoShieldCheckmark } from "react-icons/io5";

import { FaUserCircle } from "react-icons/fa";

import { FaHome } from "react-icons/fa";

const SignUp = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setisShowPassword] = useState(false);
  const [isShowConfirmPassword, setisShowConfirmPassword] = useState(false);
  const context = useContext(MyContext);
  useEffect(() => {
    context.setisHideSidebarAndHeader(true);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  }
  return (
    <section className='loginSection  signUpSection' >

      <div className="row">
        <div className="col-md-7 d-flex align-items-center flex-column part1 justify-content-center" style={{marginLeft:"100px"}}>


          <h1 style={{fontSize:"50px", marginTop:"100px"}}>BEST UX/UI FASHION ECOMMERCE DASHBOARD & ADMIN PANEL</h1>
          <br/> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste unde quo inventore omnis nostrum, id nisi corrupti iure autem quam, accusantium recusandae itaque rem iusto deleniti perspiciatis! At, quod!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae aliquid blanditiis, id recusandae totam ipsum esse, ea incidunt corporis facilis provident eos ducimus molestias rerum quod nemo aliquam deleniti.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae aliquid blanditiis, id recusandae totam ipsum esse, ea incidunt corporis facilis provident eos ducimus molestias rerum quod nemo aliquam deleniti.
          </p>
          <div className="w-100 mt-4">
            <Link to={'/'}>
            <Button className='btn-blue btn-lg btn-big'  style={{background:"blue" ,color:"white" ,borderRadius:"5px" ,marginLeft:"0px"}}><FaHome/><span  style={{marginLeft:"20px"}}> Go to Home</span></Button></Link>
          </div>
        </div>

        <div className="col-md-4 pr-0">
          
        <div className="loginBox " >
        <div className="logo text-center" >
          <img src={logo} alt="" width="40px" />
          <h5 className='font-weight-bold'>Register a new  account</h5>
        </div>
        
        <div className="wrapper sin mt-3 crad border p-3" >
          <form>
          <div    className="Sin">

            <div className={`form-group mb-3 position-relative ${inputIndex === 0 && 'focus '}`}>
              <span className='icon'><FaUserCircle /></span>
              <input type="text" className='form-control' placeholder='enter your name' onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} />
            </div>
            <div className={`form-group mb-3 position-relative ${inputIndex === 1 && 'focus '}`}>
              <span className='icon'><MdEmail /></span>
              <input type="text" className='form-control' placeholder='enter your email' onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} />
            </div>

            <div className={`form-group mb-3 position-relative ${inputIndex === 2 && 'focus '}`}>
              <span className='icon'><RiLockPasswordFill /></span>
              <input type={`${isShowPassword === true ? 'text' : 'password'}`} className='form-control' placeholder='enter your password' onFocus={() => focusInput(1)} onBlur={() => setInputIndex(null)} />
              <span className='toggleshowPassword' onClick={() => setisShowPassword(!isShowPassword)}>
                {
                  isShowPassword === true ? < IoMdEyeOff /> : <IoMdEye />
                }
              </span>
            </div>


            
            <div className={`form-group mb-3 position-relative ${inputIndex === 3 && 'focus '}`}>
              <span className='icon'>< IoShieldCheckmark /></span>
              <input type={`${isShowPassword === true ? 'text' : 'password'}`} className='form-control' placeholder='enter your password' onFocus={() => focusInput(3)} onBlur={() => setInputIndex(null)} />
              <span className='toggleshowPassword' onClick={() => setisShowConfirmPassword(!isShowConfirmPassword)}>
                {
                  isShowPassword === true ? < IoMdEyeOff /> : <IoMdEye />
                }
              </span>
            </div>
            <div className="form-group">
                        <Button className="btn  btn-lg w-100 btn-big" style={{background:"blue" ,color:"white" ,borderRadius:"5px" ,marginLeft:"0px"}} >
                            Sign In
                        </Button>
                    </div>
            
            <div className="form-group1 text-center mt-4"  >

                        <Link to={'/forgot-password'} className="link"  >FORGOT PASSWORD</Link>
                        <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                            <span className="line"></span>
                            <span className="txt">or</span>
                            <span className="line"></span>
                        </div>
                        <Button  variant="outlined"  className="w-100 btn-lg btn-big loginWithGoogle">
                            <img src={Google} alt="" width="25px" />&nbsp; Sign In with Google
                        </Button>

                    </div>
                    <div className="mt-4 text-center">
                    <span className='down'
                    style={{marginTop:"40px"}}>
                    Don't have an account? 
                    <Link to={'/login'} className=''>Register</Link> 
                </span>
                </div>
                </div>
                </form>
            </div>

        </div>
      

   
   
   </div>
   </div>
    </section>
    
  )
}

export default SignUp;
