import React from 'react'

export default function location(props) {
  return (
    <div className='loginbox'>
        <div>props.user.username</div>
        <div>props.user.latitude</div>
        <div>props.user.longitude</div>
    </div>

  )
}
