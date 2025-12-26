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
const Login = () => {
    const[inputIndex, setInputIndex] =useState(null);
    const[isShowPassword, setisShowPassword] =useState(false);
    const context =useContext(MyContext);
    useEffect(()=> {
        context.setisHideSidebarAndHeader(true);
    },[]);

    const focusInput =(index)=>{
        setInputIndex(index);
    }
  return (
    <section className='loginSection'>
        <div className="loginBox">
            <div className="logo text-center">
                <img src={logo} alt="" width="40px" />
                <h5 className='font-weight-bold'>Login to Hotash</h5>
            </div>
            <div className="wrapper mt-3 crad border p-3">
                <form>
                    <div className={`form-group mb-3 position-relative ${inputIndex === 0 && 'focus '}`}>
                        <span className='icon'><MdEmail/></span>
                        <input type="text" className='form-control' placeholder='enter your email' onFocus={()=>focusInput(0)} onBlur={() => setInputIndex(null)} />
                    </div>
                   
                    <div className={`form-group mb-3 position-relative ${inputIndex === 1 && 'focus '}`}>
                        <span className='icon'><RiLockPasswordFill/></span>
                        <input type={`${isShowPassword === true ? 'text' : 'password'}`}   className='form-control' placeholder='enter your password' onFocus={()=>focusInput(1)} onBlur={() => setInputIndex(null)} />
                        <span className='toggleshowPassword' onClick={() => setisShowPassword(!isShowPassword)}>
                            {
                                isShowPassword===true ? < IoMdEyeOff/> :<IoMdEye/>
                            }
                        </span>
                    </div>
                    <div className="form-group">
                        <Button className="btn  btn-lg w-100 btn-big" style={{background:"blue" ,color:"white" ,borderRadius:"5px" ,marginLeft:"0px"}} >
                            Sign In
                        </Button>
                    </div>
                    <div className="form-group text-center mt-4"  >

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
                </form>
            </div>
            <div className="wrapperr mt-3">
                <span className='down'>
                    Don't have an account? 
                    <Link to={'/signUp'} className=''>Register</Link> 
                </span>
            </div>
        </div>
      
    </section>
  )
}

export default Login;
