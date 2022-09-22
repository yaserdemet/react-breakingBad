import React from 'react'
import {useState} from "react"
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
const SearchBar = () => {
  return (
    <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
      borderRadius : 20,
      pl : 2,
      // boxShadow : "none",
      mr : {sm : 5},
      border : "1px solid #e3e3e3 "
    }}
    >
      <input className="search-bar"
      style={{border : "none" , outline : "none"}}
      onChange={() => {}}
      placeholder="Search..." />
      <IconButton type="submit" sx={{p:"10px" , color : "red"}}>
        <Search/>
      </IconButton>

    </Paper>
  )
}

export default SearchBar