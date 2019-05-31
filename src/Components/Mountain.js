import React, { Component } from 'react'
import './Mountain.css'
import EditMountains from './EditMountains';


class Mountain extends Component {
  constructor(props){
    super(props)
    this.state = {
     
    } 
  }


 

  render(){
    const { mountain, deleteMountains } = this.props
    return(
     <div className="boxes">
      <div className="back-ground" style={{border: '5px solid black', margin: 20, width: 300, height: 500 }}>
        <img width="300" src={mountain.pic} alt=""/>
        <ul className="navigation">
          <li>Name: {mountain.name}</li>
          <li>Trail: {mountain.trail}</li>
          <li>Trail Details: {mountain.trailStats}</li>
        </ul>
      <div>
        <EditMountains mountain={mountain} editMountains={this.props.editMountains}/>
        <button onClick={() => deleteMountains(mountain.id)}>Delete</button>
      </div>  
    
        
      </div>
     </div> 
    )
  }
}

export default Mountain