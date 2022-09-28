import React from 'react'
import defaultPhoto from "../utils/bg.jpg"

const Character = ({obj}) => {
    const {img, name , occupation, status, char_id, portrayed,nickname,birthday } = obj
    // console.log(img, name, status)
  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        {
          char_id == 39 ? <img src={defaultPhoto} /> :
          <img src={img} alt='' />
        }
      </div>
      <div className='card-back'>
        <h1>{name}</h1>
        <ul>
          <li>
            <strong>Actor Name:</strong> {portrayed}
          </li>
          <li>
            <strong>Nickname:</strong> {nickname}
          </li>
          <li>
            <strong>Birthday:</strong> {birthday}
          </li>
          <li>
            <strong>Status:</strong> {status}
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Character