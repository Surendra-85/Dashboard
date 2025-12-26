import React from 'react'

const UserAvatarImgComponent = (props) => {
  return (
    
      <div className={`userImg ${props.lg===true && 'lg'}`}>
            <span className="rounded-circle">
                <img src={props.img}  width={50} height={60} style={{borderRadius:"50%"}} />
            </span>
        </div>
    
  )
}

export default UserAvatarImgComponent
