import React from 'react'
import loading from "../utils/spinner.gif"
const Loading = () => {
  return (
    <div className='' style={{display : "flex" , justifyContent : "center"}}>
        <img src={loading} alt=""  />
    </div>
  )
}

export default Loading