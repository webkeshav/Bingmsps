import React from 'react'
import "./Searchbar.css"

function Searchbar({placeholder, data}) {
  return (
   
      <div className='search my-3'>
      <div className='searchInput'>
          <input type="text" placeholder={placeholder}/>
          <div className='searchIcon'></div>
      </div>
          <div className='dataResults'></div>
     </div>
      
      
  
  )
}

export default Searchbar
