import React from 'react'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { MdBrandingWatermark } from "react-icons/md";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

import { FaReply } from "react-icons/fa";

import Slider from "react-slick";
import UserAvatarImgComponent from '../../components/userAvatarImg';

//breadcrumb code
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
      theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[800];
  return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
          backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
          boxShadow: theme.shadows[1],
          backgroundColor: emphasize(backgroundColor, 0.12),
      },
  };
});

const ProductDetails= () => {

  var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    arrows:false
  };
  var productSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false

  };
  return (
    <>
       <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Product View</h5>
                <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_" style={{marginLeft:"600px"}}>
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<HomeIcon fontSize="small" />}
                        />

                        <StyledBreadcrumb
                            label="Products"
                            component="a"
                            href="#"
                        />
                        <StyledBreadcrumb
                            label="Product View"

                        />
                    </Breadcrumbs>
          
        </div>
        <div className="card productDetailsSEction">
<div className="row">
  <div className="col-md-5 p-3 " style={{marginLeft:"20px"}}>
  <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
    <h5 className='mb-3'>Product Gallery</h5>
  <Slider {...productSliderOptions} className='sliderBig'>
      <div className='item'>
        <img src="https://m.media-amazon.com/images/I/81OmJ6Zj2VL._SY741_.jpg" alt="" className='w-100'/>
      </div>
      <div className='item'>
        <img src="https://m.media-amazon.com/images/I/61sWCzPfHdL._SX569_.jpg" alt="" className='w-100'/>
      </div>

      <div className='item'>
        <img src="https://m.media-amazon.com/images/I/81BcuYaIM5L._SY741_.jpg" alt="" className='w-100'/>
      </div>

      <div className='item'>
        <img src="https://m.media-amazon.com/images/I/81EO54ZnF3L._SY741_.jpg" alt="" className='w-100'/>
      </div>

    </Slider>

    <Slider {...productSliderSmlOptions} className='silderSml'>
      <div className='item'>
        <img src="https://m.media-amazon.com/images/I/81OmJ6Zj2VL._SY741_.jpg" alt="" className='w-100'/>
      </div>

      <div className='item'>
        <img src="https://m.media-amazon.com/images/I/61sWCzPfHdL._SX569_.jpg" alt="" className='w-100'/>
      </div>

      <div className='item'>
        <img src="https://m.media-amazon.com/images/I/81BcuYaIM5L._SY741_.jpg" alt="" className='w-100'/>
      </div>

      <div className='item'>
        <img src="https://m.media-amazon.com/images/I/81EO54ZnF3L._SY741_.jpg" alt="" className='w-100'/>
      </div>
      <div className='item'>
        <img src="https://m.media-amazon.com/images/I/61sWCzPfHdL._SX569_.jpg" alt="" className='w-100'/>
      </div>
      <div className='item'>
        <img src="https://m.media-amazon.com/images/I/81OmJ6Zj2VL._SY741_.jpg" alt="" className='w-100'/>
      </div>
      <div className='item'>
        <img src="https://m.media-amazon.com/images/I/81OmJ6Zj2VL._SY741_.jpg" alt="" className='w-100'/>
      </div>
      

    </Slider>
  </div>



  </div>


  <div className='col-md-6' style={{marginLeft:"20px"}}>
                            <div className="pt-3 pb-3 pl-4 pr-4 ">
                                <h5 className="mb-3" style={{marginTop:"20px"}}>Product Details</h5>

                                <h4>Formal suits for men wedding slim fit 3 piece<br/> dress business party jacket</h4>

                                <div className="mt-4 productInfo">
                                    <div className="mb-2 row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><MdBrandingWatermark /></span>
                                            <span className="name">Brand</span>:
                                        </div>

                                        <div className="col-sm-9">

                                               <span>Ecstasy</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"></span>
                                            <span className="name">Category</span>:
                                        </div>

                                        <div className="col-sm-9">

                                             <span>Man's</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"></span> 
                                            <span className="name">Tags</span> 
                                        </div>

                                        <div className="col-sm-9">

                                              :<span>
                                                <div className="row">
                                                    <ul className="list list-inline tags sml">
                                                        <li className="list-inline-item">
                                                            <span>SUITE</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>PARTY</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>PARTY</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>DRESS</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>SMART</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>MAN</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"></span>
                                            <span className="name">Color</span>:
                                        </div>

                                        <div className="col-sm-9">

                                             <span>
                                                <div className="row">
                                                    <ul className="list list-inline tags sml">
                                                        <li className="list-inline-item">
                                                            <span>RED</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>BLUE</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>WHITE</span>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"></span>
                                            <span className="name">Color</span>:
                                        </div>

                                        <div className="col-sm-9">

                                             <span>Man's</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"></span>
                                            <span className="name">Size</span>:
                                        </div>

                                        <div className="col-sm-9">

                                             <span>(68) Piece</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"></span>
                                            <span className="name">Review</span> :
                                        </div>

                                        <div className="col-sm-9">

                                             <span>(03) Review</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"></span>
                                            <span className="name">Published</span> :
                                        </div>

                                        <div className="col-sm-9">

                                            <span>02 Feb 2020</span>
                                        </div>
                                    </div>




                                </div>

                            </div>

                        </div>
</div>

<div className="p-4">
  
<h4 className='mt-4'>Product Descript</h4>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit repellendus expedita esse cupiditate quos doloremque rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam debitis amet natus doloremque laudantium? Repudiandae, consequuntur, officiis quidem quo deleniti, autem non laudantium sequi error molestiae ducimus accusamus facere velit consectetur vero dolore natus nihil temporibus aspernatur quia consequatur? Consequuntur voluptate deserunt repellat tenetur debitis molestiae doloribus dicta. In rem illum dolorem atque ratione voluptates asperiores maxime doloremque laudantium magni neque ad quae quos quidem, quaerat rerum ducimus blanditiis reiciendis</p>

<br />

                        <h6 className="mt-4 mb-4">Rating Analytics</h6>
                        <div className="ratingSection">
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    5 Star
                                </span>

                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '70%' }}></div>
                                    </div>
                                </div>

                                <span className="col3">
                                    (22)
                                </span>
                            </div>

                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    4 Star
                                </span>

                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '50%' }}></div>
                                    </div>
                                </div>

                                <span className="col3">
                                    (22)
                                </span>
                            </div>

                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    3 Star
                                </span>

                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '50%' }}></div>
                                    </div>
                                </div>

                                <span className="col3">
                                    (2)
                                </span>
                            </div>



                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    2 Star
                                </span>

                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '20%' }}></div>
                                    </div>
                                </div>

                                <span className="col3">
                                    (2)
                                </span>
                            </div>


                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    1 Star
                                </span>

                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '50%' }}></div>
                                    </div>
                                </div>

                                <span className="col3">
                                    (2)
                                </span>
                            </div>

                        </div>


                        <br />
                        <h6 className="mt-4 mb-4">Customer_reviews</h6>

                       <div className="reviewsSecrion">
                            <div className="reviewsRow">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="mb-3 userInfo d-flex align-items-center">
                                                <UserAvatarImgComponent img="http://localhost:5173/src/images/user.png" lg={true}  />

                                                <div className="pl-3 info"  style={{marginLeft:"20px"}}>
                                                    <h6 >Ram Kumar</h6>
                                                    <span >25 minutes ago!</span>
                                                </div>

                                            </div>


                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />


                                        </div>
                                    </div>


                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="ml-auto btn-blue btn-big btn-lg"  style={{backgroundColor:"blue" ,color:"white"}}><FaReply /> &nbsp; Reply</Button>
                                        </div>
                                    </div>


                                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>


                                </div>
                            </div>


                            <div className="reviewsRow reply">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="mb-3 userInfo d-flex align-items-center">
                                                <UserAvatarImgComponent img="http://localhost:5173/src/images/user.png" lg={true}  />

                                                <div className="pl-3 info" style={{marginLeft:"20px"}}>
                                                    <h6>Ravi Josi</h6>
                                                    <span >25 minutes ago!</span>
                                                </div>

                                            </div>


                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />


                                        </div>
                                    </div>


                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="ml-auto btn-blue btn-big btn-lg"  style={{backgroundColor:"blue" ,color:"white"}}><FaReply /> &nbsp; Reply</Button>
                                        </div>
                                    </div>


                                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>


                                </div>
                            </div>

                            <div className="reviewsRow reply">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="mb-3 userInfo d-flex align-items-center">
                                                <UserAvatarImgComponent img="http://localhost:5173/src/images/user.png" lg={true} />

                                                <div className="pl-3 info"  style={{marginLeft:"20px"}}>
                                                    <h6>Mirana Kapoor</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>

                                            </div>


                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />


                                        </div>
                                    </div>


                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="ml-auto btn-blue btn-big btn-lg"  style={{backgroundColor:"blue" ,color:"white"}}><FaReply /> &nbsp; Reply</Button>
                                        </div>
                                    </div>


                                    <p className="mt-3" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>


                                </div>
                            </div>


                            <div className="reviewsRow">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="mb-3 userInfo d-flex align-items-center">
                                                <UserAvatarImgComponent img="http://localhost:5173/src/images/user.png" lg={true} />

                                                <div className="pl-3 info"  style={{marginLeft:"20px"}}>
                                                    <h6>Surendra</h6>
                                                    <span >25 minutes ago!</span>
                                                </div>

                                            </div>


                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />


                                        </div>
                                    </div>


                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="ml-auto btn-blue btn-big btn-lg"  style={{backgroundColor:"blue" ,color:"white"}}><FaReply /> &nbsp; Reply</Button>
                                        </div>
                                    </div>


                                    <p className="mt-3" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>


                                </div>
                            </div>

                        </div>

                        <h6 className="mt-4 mb-4">Review Reply Form</h6>
                         <form className="reviewForm">
                            <textarea placeholder="write here ">
                            </textarea>

                            <Button className="mt-4 btn-blue btn-big btn-lg w-100"   style={{backgroundColor:"blue" ,color:"white"}}>drop your replies</Button>

                        </form>

</div>
        </div>
        </div>
       
        
        
          
       
    </>
  )
}

export default ProductDetails;
