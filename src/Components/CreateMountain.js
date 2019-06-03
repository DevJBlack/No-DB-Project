import React, { Component } from 'react'
import './CreateMountain.css'

class CreateMountain extends Component {
  constructor(props){
    super(props)

    this.state = ({
      name: '',
      pic: '',
      trail: '',
      trailStats: ''
    })
  }

  handleValue = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  handleAdd = () => {

    let addMountain = this.state

    this.props.createMountains(addMountain)
    this.setState({
      name: '',
      pic: '',
      trail: '',
      trailStats:''
    })
  }

  render(){
    return(
      <div className="input-fields">
         <div className="input-one">
          <input style={{ borderRadius: 25, background: 'none', border: '2px solid lightskyblue', color: 'white'}}type="text" placeholder="picture" value={this.state.pic} onChange={this.handleValue} name="pic"/>
         </div> 
         <div className="input-two">
          <input style={{borderRadius: 25, background: 'none', border: '2px solid lightskyblue', color: 'white'}} type="text" placeholder="name" value={this.state.name} onChange={this.handleValue} name="name"/>
         </div> 
         <div className="input-three">
          <input style={{borderRadius: 25, background: 'none', border: '2px solid lightskyblue', color: 'white'}} type="text" placeholder="trail" value={this.state.trail} onChange={this.handleValue} name="trail"/>
         </div> 
         <div className="input-four">
          <input style={{borderRadius: 25, background: 'none', border: '2px solid lightskyblue', color: 'white'}} type="text" placeholder="trail Stats" value={this.state.trailStats} onChange={this.handleValue} name="trailStats"/>
         </div> 
         <div className="input-btn">
          <button onClick={this.handleAdd}>Add</button>
         </div>
      </div>
    )
  }
}

export default CreateMountain