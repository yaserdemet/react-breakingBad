import React from 'react'
import Header from './Header'
import { useState, useEffect } from 'react'



const Main = () => {

    const [items , setItems] = useState([])
    const [isLoading , setIsLoading] = useState(true)

  return (
    <main className='container'>
        <Header />
    </main>
  )
}

export default Main