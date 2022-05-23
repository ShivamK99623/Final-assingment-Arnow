import React from 'react'

function Usercomponent(props) {
const {user,unique}=props
  return (
    <div className='tablediv' ><span>{user.name}</span><span id='userEmail'>{user.email}</span><span>{user.number}</span> </div>
)
}

export default Usercomponent