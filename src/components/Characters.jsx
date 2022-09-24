import React from 'react'
import Character from './Character'
import Loading from './Loading'

const Characters = ({isLoading , items}) => {
    // console.log(isLoading, items)
  return  isLoading ? <Loading /> : <section className='cards'>


    {items?.map((item,index) => {
        const {name, img, status , portrayed , char_id , occupation } = item
        const obj = {
            name , img , status , portrayed , char_id , occupation
        }
        return(
            <Character key={index}  obj={obj}/>
        )
    })}

  </section>
}

export default Characters