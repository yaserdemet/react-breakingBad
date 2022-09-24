import React from 'react'
import { useState } from 'react'
import { TextField , Paper } from '@mui/material'


const Search = ({query , setQuery}) => {
    const [text , setText] = useState("")
    // console.log(text);
    // console.log(query)
  return (
    
    <section className='search'>
        <form action="">
            <input 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control"  
            placeholder = "search characters"
            autoFocus type="text" />
        </form>
    </section>
  )
}

export default Search