import React from "react";
import Button from '@mui/material/Button';
import { HiDotsVertical } from "react-icons/hi";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';



const DashboardBox = (props,title) => {

  
  return (
    <div
      className="dashboardBox"
      style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
      }}>

        {
          props.grow === true ? 
<span className="chart"><TrendingUpIcon/></span>
:
<span className="chart"><TrendingDownIcon/></span>

}



      <div className="d-flex w-100">
        <div className="col1">
          <h4 className="text-white">{props.title}</h4>
          <h3 className="text-white">277</h3>
        </div>
        <div className="ml-auto">
          {
          props.icon ? 
          <span className="icon">
            {props.icon ? props.icon :'' }
            </span>
            :
            ''}
        </div>
      </div>
<div className="d-flex align-items-center w-100 bottonEle">
  <h6 className="text-red mb-0 mt-0">Last Month</h6>
  <div className="ml-auto">
  <Button className="ml-auto toggleIcon" ><HiDotsVertical/></Button>


  
</div>
</div>
   
    </div>
  );
};

export default DashboardBox;
