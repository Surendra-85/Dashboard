

import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import Boy from '../../images/user.png'
import Product2 from '../../images/1.png';
import Product3 from '../../images/2.png';
import Product4 from '../../images/3.png';
import Product6 from '../../images/4.png';
import Product7 from '../../images/6.png';
 import DashboardBox from './components/dashboardBox';
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import context from 'react-bootstrap/esm/AccordionContext';
import { useContext } from 'react';
import { MyContext } from '../../App';
const Dashboard = () => {
  const context =useContext(MyContext);
  useEffect (() =>{

    context.setisHideSidebarAndHeader(false);
  },[]);
  
  return (
    <>
    <div className="right-content w-100">
      <div className="row dashboardBoxWrapperRow">
        <div className="col-md-8">
          <div className="dashboardBoxWrapper d-flex">
           
         <DashboardBox color={["#1da256" ,"#48d483"]} icon={<FaUserCircle/>} grow={true}  title={"Total Users"}/>
         <DashboardBox color={["#c012e2" ,"#eb64fe"]} icon={<IoMdCart/>} title={"Total  Orders"} />
         <DashboardBox color={["#2c78e5" ,"#60aff5"]} icon={<FaBagShopping/>}  title={"Total Product"}/>
         <DashboardBox color={["#e1950e" ,"#f3cd29"]} icon={<GiStarsStack/>}  title={"Total Views"}/>
        </div>
        </div>


        <div className="col-md-4 pl-0">
          <div className="box graphBox">

          </div>
        </div>
      </div>

      <div className="card shadow border-0 p-3 mt-4">
        <h3 className="hd">Best Selling Products</h3>
        <div className="row cardFilters mt-3">
          <div className="col">
          
           <div className="d-flex justify-content-around">
            <div className="">
            <h4 style={{fontSize:"15px" ,fontWeight:"bold"}}>SHOW BY</h4>
            <select type="text"  style={{borderRadius:"5px", width:"200px" ,height:"30px"}}>
                <option></option>
                <option>Men</option>
                <option>Women</option>
                <option>Boy</option>
                </select>
        </div>
        <div className="">
        <h4 style={{fontSize:"15px" ,fontWeight:"bold"}}>SHOW BY</h4>
            <select type="text"  style={{borderRadius:"5px", width:"200px" ,height:"30px"}}>
                <option></option>
                <option>Men</option>
                <option>Women</option>
                <option>Boy</option>
                </select>
        </div>
        <div className="">
        <h4 style={{fontSize:"15px" ,fontWeight:"bold"}}>SHOW BY</h4>
            <select type="text"  style={{borderRadius:"5px", width:"200px" ,height:"30px"}}>
                <option></option>
                <option>Men</option>
                <option>Women</option>
                <option>Boy</option>
                </select>
        </div>
        <div className="">
        <h4 style={{fontSize:"15px" ,fontWeight:"bold"}}>SHOW BY</h4>
            <select type="text"  style={{borderRadius:"5px", width:"200px" ,height:"30px"}}>
                <option></option>
                <option>Men</option>
                <option>Women</option>
                <option>Boy</option>
                </select>
        </div>
        </div>
          </div>
        </div>



<div className="table-responsive mt-3">
  <table className="table table-bordered v-align">
<thead className='thead-dark'>
  <tr>
    <th>UID</th>
    <th  style={{width:"300px"}}>PRODUCT</th>
    <th>CATEGORY</th>
    <th>BRAND</th>
    <th>PRICE</th>
    <th>STOCK</th>
    <th>RATING</th>
    <th>ORDER</th>
    <th>SALES</th>
    <th>ACTION</th>
  </tr>


</thead>
<tbody>
  <tr>
    <td>#1</td>
    <td>
     <div className="d-flex productBox align-items-center">
      <div className="imgWrapper ">
        <div className="img">
          <img src={Product2} alt="" className="w-100" />
        </div>
      </div>
      <div className="info pl-0">
      <h6>Tops and skirt set for Female</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipi</p>
      </div>
     </div>
    </td>
    <td>womans</td>
    <td>richman</td>
    <td>
      <div style={{width:"70px"}}>
      <del className="old">$21.00</del>
      <span className="new text-danger">$21.00</span>
      </div>
    </td>
    <td>30</td>
    <td>4.9{16}</td>
    <td>300</td>
    <td>$83k</td>

    <td>
      <div className="actions d-flex align-items-center">

      <Link to="productdetails">   
     
     <Button  className="secondary" color="secondary"><FaEye/></Button>
     </Link>
        <Button   className="success" color="success"><FaPencilAlt/></Button>
        <Button   className="error" color="error"><MdDelete/></Button>
      
      </div>
    </td>
  </tr>

  <tr>
    <td>#2</td>
    <td>
     <div className="d-flex productBox align-items-center">
      <div className="imgWrapper ">
        <div className="img">
          <img src={Product3} alt="" className="w-100" />
        </div>
      </div>
      <div className="info pl-0">
      <h6>Tops and skirt set for Female</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipi</p>
      </div>
     </div>
    </td>
    <td>womans</td>
    <td>richman</td>
    <td>
      <div style={{width:"70px"}}>
      <del className="old">$21.00</del>
      <span className="new text-danger">$21.00</span>
      </div>
    </td>
    <td>30</td>
    <td>4.9{16}</td>
    <td>300</td>
    <td>$83k</td>

    <td>
      <div className="actions d-flex align-items-center">
      <Link to="productdetails">   
     
     <Button  className="secondary" color="secondary"><FaEye/></Button>
     </Link>
        <Button   className="success" color="success"><FaPencilAlt/></Button>
        <Button   className="error" color="error"><MdDelete/></Button>
      
      </div>
    </td>
  </tr>

  <tr>
    <td>#3</td>
    <td>
     <div className="d-flex productBox align-items-center">
      <div className="imgWrapper ">
        <div className="img">
          <img src={Product4} alt="" className="w-100" />
        </div>
      </div>
      <div className="info pl-0">
      <h6>Tops and skirt set for Female</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipi</p>
      </div>
     </div>
    </td>
    <td>womans</td>
    <td>richman</td>
    <td>
      <div style={{width:"70px"}}>
      <del className="old">$21.00</del>
      <span className="new text-danger">$21.00</span>
      </div>
    </td>
    <td>30</td>
    <td>4.9{16}</td>
    <td>300</td>
    <td>$83k</td>

    <td>
      <div className="actions d-flex align-items-center">
        <Button  className="secondary" color="secondary"><FaEye/></Button>
        <Button   className="success" color="success"><FaPencilAlt/></Button>
        <Button   className="error" color="error"><MdDelete/></Button>
      
      </div>
    </td>
  </tr>

  <tr>
    <td>#4</td>
    <td>
     <div className="d-flex productBox align-items-center">
      <div className="imgWrapper ">
        <div className="img">
          <img src={Product6} alt="" className="w-100" />
        </div>
      </div>
      <div className="info pl-0">
      <h6>Tops and skirt set for Female</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipi</p>
      </div>
     </div>
    </td>
    <td>womans</td>
    <td>richman</td>
    <td>
      <div style={{width:"70px"}}>
      <del className="old">$21.00</del>
      <span className="new text-danger">$21.00</span>
      </div>
    </td>
    <td>30</td>
    <td>4.9{16}</td>
    <td>300</td>
    <td>$83k</td>

    <td>
      <div className="actions d-flex align-items-center">
        <Button  className="secondary" color="secondary"><FaEye/></Button>
        <Button   className="success" color="success"><FaPencilAlt/></Button>
        <Button   className="error" color="error"><MdDelete/></Button>
      
      </div>
    </td>
  </tr>

  <tr>
    <td>#5</td>
    <td>
     <div className="d-flex productBox align-items-center">
      <div className="imgWrapper ">
        <div className="img">
          <img src={Product7} alt="" className="w-100" />
        </div>
      </div>
      <div className="info pl-0">
      <h6>Tops and skirt set for Female</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipi</p>
      </div>
     </div>
    </td>
    <td>womans</td>
    <td>richman</td>
    <td>
      <div style={{width:"70px"}}>
      <del className="old">$21.00</del>
      <span className="new text-danger">$21.00</span>
      </div>
    </td>
    <td>30</td>
    <td>4.9{16}</td>
    <td>300</td>
    <td>$83k</td>

    <td>
      <div className="actions d-flex align-items-center">
        <Button  className="secondary" color="secondary"><FaEye/></Button>
        <Button   className="success" color="success"><FaPencilAlt/></Button>
        <Button   className="error" color="error"><MdDelete/></Button>
      
      </div>
    </td>
  </tr>

  <tr>
    <td>#6</td>
    <td>
     <div className="d-flex productBox align-items-center">
      <div className="imgWrapper ">
        <div className="img">
          <img src={Product2} alt="" className="w-100" />
        </div>
      </div>
      <div className="info pl-0">
      <h6>Tops and skirt set for Female</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipi</p>
      </div>
     </div>
    </td>
    <td>womans</td>
    <td>richman</td>
    <td>
      <div style={{width:"70px"}}>
      <del className="old">$21.00</del>
      <span className="new text-danger">$21.00</span>
      </div>
    </td>
    <td>30</td>
    <td>4.9{16}</td>
    <td>300</td>
    <td>$83k</td>

    <td>
      <div className="actions d-flex align-items-center">
        <Button  className="secondary" color="secondary"><FaEye/></Button>
        <Button   className="success" color="success"><FaPencilAlt/></Button>
        <Button   className="error" color="error"><MdDelete/></Button>
      
      </div>
    </td>
  </tr>

  <tr>
    <td>#7</td>
    <td>
     <div className="d-flex productBox align-items-center">
      <div className="imgWrapper ">
        <div className="img">
          <img src={Product4} alt="" className="w-100" />
        </div>
      </div>
      <div className="info pl-0">
      <h6>Tops and skirt set for Female</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipi</p>
      </div>
     </div>
    </td>
    <td>womans</td>
    <td>richman</td>
    <td>
      <div style={{width:"70px"}}>
      <del className="old">$21.00</del>
      <span className="new text-danger">$21.00</span>
      </div>
    </td>
    <td>30</td>
    <td>4.9{16}</td>
    <td>300</td>
    <td>$83k</td>

    <td>
      <div className="actions d-flex align-items-center">
        <Button  className="secondary" color="secondary"><FaEye/></Button>
        <Button   className="success" color="success"><FaPencilAlt/></Button>
        <Button   className="error" color="error"><MdDelete/></Button>
      
      </div>
    </td>
  </tr>

  
</tbody>

  </table>
  <div className="d-flex tableFooter">
    <p>showing <b>12</b>of <b>60</b> results</p>
<Pagination count={10} color="primary"  className='pagination' showFirstButton showLastButton />

  </div>

</div>


      </div>
    </div>
    </>
  )
}

export default Dashboard;
