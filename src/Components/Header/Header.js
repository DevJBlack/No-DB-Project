import React from 'react'
import './Header.css'
import HeaderImage from '../HeaderImage/HeaderImage'

function Header(){
  return (
    <header className="navBar">
     <div className="imgDisplay" >
      <HeaderImage />
     </div> 
     <div className="trail">
      <h1>Trails To-Do </h1>
     </div>
     <div className="nameDisplay">
      <p>Devin Black</p>
     </div>
    </header>
  )
}

export default Header