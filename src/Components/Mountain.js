import React, { Component } from 'react'
import './Mountain.css'
import EditMountains from './EditMountains';


class Mountain extends Component {
  render(){
    const { mountain} = this.props
    return(
     <div className="boxes">
      <div className="back-ground">
        <ul className="navigation">
          <li>Name: {mountain.name}</li>
          <li>Trail: {mountain.trail}</li>
          <li>Trail Details: {mountain.trailStats}</li>
        </ul>
      <div>
        <EditMountains mountain={mountain} editMountains={this.props.editMountains} deleteMountains={this.props.deleteMountains}/>
      
      </div>  
        <img className="pic" src={mountain.pic} alt=""/>
     
        
      </div>
     </div> 
    )
  }
}

export default Mountain