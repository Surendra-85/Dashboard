import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import { IoCloseSharp } from "react-icons/io5";
import { FaFileImage } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { FaCloudUploadAlt } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const ProductUpload = () => {
  const [categoryVal, setCategoryVal] = useState('');
  const [value, setValue] = useState(1);

  const handleChangeCategory = (event) => {
    setCategoryVal(event.target.value);
  };

  return (
    <div className="right-content w-100">
      <div className="card shadow border-0 w-100 flex-row p-4">
        <h5 className="mb-0">Product Upload</h5>
      </div>

      <form className="form">
        <div className="row">
          <div className="col-sm-12">
            <div className="card p-4">
              <h5 className="mb-4">Basic Information</h5>

              <div className="form-group">
                <h6>TITLE</h6>
                <input type="text" className="form-control" />
              </div>

              <div className="form-group mt-3">
                <h6>DESCRIPTION</h6>
                <textarea rows={5} className="form-control"></textarea>
              </div>

              <div className="row mt-3">
                <div className="col">
                    <div className="form-group">
                  <h6>CATEGORY</h6>
                  <Select
                    value={categoryVal}
                    onChange={handleChangeCategory}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    className='w-100'
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="men">Men</MenuItem>
                    <MenuItem value="women">Women</MenuItem>
                    <MenuItem value="kids">Kids</MenuItem>
                  </Select>
                </div>
                </div>
                <div className="col">
                <div className="form-group">

                  <h6>DRAND</h6>
                  <Select
                    value={categoryVal}
                    onChange={handleChangeCategory}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    className='w-100'
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="men">Men</MenuItem>
                    <MenuItem value="women">Women</MenuItem>
                    <MenuItem value="kids">Kids</MenuItem>
                  </Select>
                </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <h6> PRICE</h6>
                        <input type="text"  placeholder='type here' style={{height:"55px", borderRadius:"5px"}}/>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                    <div className="form-group">
                        <h6>OLD PRICE</h6>
                        <input type="text"  placeholder='type here' style={{height:"55px", borderRadius:"5px"}}/>

                    </div>
                </div>
                <div className="col">
                <div className="form-group">

                  <h6>DRAND</h6>
                  <Select
                    value={categoryVal}
                    onChange={handleChangeCategory}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    className='w-100'
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="men">Men</MenuItem>
                    <MenuItem value="women">Women</MenuItem>
                    <MenuItem value="kids">Kids</MenuItem>
                  </Select>
                </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <h6>PRODUCT STOCK</h6>
                        <input type="text"  placeholder='type here' style={{height:"55px", borderRadius:"5px"}}/>



                    </div>
                </div>
              </div>
              

              <div className="row">
              <div className="col">
                    <div className="form-group">
                        <h6>BRAND</h6>
                        <input type="text"  placeholder='type here' style={{height:"55px", borderRadius:"5px"}}/>

                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <h6>DESCOUNT</h6>
                        <input type="text"  placeholder='type here' style={{height:"55px", borderRadius:"5px"}}/>

                    </div>
                </div>
                <div className="col">
                <div className="form-group">

                  <h6>PRODUCT RAMS</h6>
                  <Select
                    value={categoryVal}
                    onChange={handleChangeCategory}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    className='w-100'
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="men">8GB</MenuItem>
                    <MenuItem value="women">16GB</MenuItem>
                    <MenuItem value="kids">64GB</MenuItem>
                  </Select>
                </div>
                </div>


              </div>

              <div className="row">
                <div className="col">
                    <div className="form-group">
                        <h6>RATINGS</h6>
                        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />


                    </div>
                </div>
               
              </div>

              <div className="form-group mt-3">
                <h6>TAGS</h6>
                <textarea rows={5} className="form-control" placeholder="type here" ></textarea>
              </div>

            </div>
          </div>

        </div>
      </form>
 
      <div className="card p-4 mt-0">
      <h5 className="mb-4">
Media And Published
          </h5>
        <div className="imageUploadSec d-flex">
         
          <div className="imgUploadBox d-flex align-items-center ">
            <div className="uploadBox">
              <span className="remove">
<IoCloseSharp/>
              </span>
              <div className="box">

<LazyLoadImage
      alt={'image'}
      effect="blur"
      className='w-100'
      src={'https://images.meesho.com/images/products/383857316/f4ypd_512.avif?width=360'}
      />
              </div>
             
            </div>

            
            
          </div>
          <div className="Sp" style={{marginLeft:"50px"}}>
            <FaFileImage style={{fontSize:"50px",width:"200px"}}/>
            <br/>
            <br/>
                <input type="file" />
              </div>
          
        </div>
        <button className='btn btn-primary btn-lg btn-big mt-4'><FaCloudUploadAlt/><span style={{marginLeft:"10px"}}>PUBLISH AND VIEW</span></button>

      </div>
    </div>
  )
};

export default ProductUpload;
