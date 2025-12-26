import React from 'react'
import { IoMdSearch } from "react-icons/io";
const SearchBox = () => {
  return (
    <div>
      <div className="searchBox position-relative d-flex align-items-center">
        <IoMdSearch className='mr-2' />
        <input type="text"  placeholder='Search here'/>
      </div>
    </div>
  )
}

export default SearchBox;
