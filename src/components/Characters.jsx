import React from 'react'
import Character from './Character'
import Loading from './Loading'

const Characters = ({isLoading , items, query}) => {
    // console.log(isLoading, items)
    console.log(query)
  return  isLoading ? <Loading /> : <section className='cards'>


    {items?.filter((item, index) =>{
        return (
            query.toLowerCase() === "" ?  item : item.name.toLowerCase().includes(query)
        )
    }).map((item,index) => {
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