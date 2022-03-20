import React from 'react'

const Profile = (props) => {
  return (
    <div>
      <a href={`https://github.com/${props.name}`}><img className='typeahead' src={props.url} alt=''/></a>
      <h3 className='name'>{props.name}</h3>
    </div>
  )
}

export default Profile