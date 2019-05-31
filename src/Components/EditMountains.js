import React, { Component } from 'react'

class EditMountains extends Component {
  constructor(props){
    super(props)

    // let { name, trail, trailStats } = props.mountain

    this.state = {
      pic: '',
      name: '',
      trail: '',
      trailStats: '',
      edit: false
    } 
  }


  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }


  handleChange = (e) => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  editMountain = () => {
    let editedMountain = {...this.state} 
    let { id } = this.props.mountain
    this.props.editMountains(id, editedMountain)
    this.setState({
      pic: '',
      name: '',
      trail: '',
      trailStats: ''
    })
  }
  render(){
    console.log(this.props)
    return(
      <div>   
       {this.state.edit ?
       <div className="input-boxes">
        <input type="text" placeholder="pic" value={this.state.pic} name="pic" onChange={this.handleChange}/>
        <input type="text" placeholder="name" value={this.state.name} name="name" onChange={this.handleChange}/>
        <input type="text" placeholder="trail" value={this.state.trail} name="trail" onChange={this.handleChange}/>
        <input type="text" placeholder="trailStats" value={this.state.trailStats} name="trailStats" onChange={this.handleChange}/>
        <button onClick={() => this.editMountain()}>Edit</button>
        <button onClick={this.toggleEdit}>Cancel</button>
       </div>
        :
        <div>
          {/* <p>{this.props.mountain.name}</p>
          <p>{this.props.mountain.trail}</p>
          <p>{this.props.mountain.trailStats}</p> */}
        <button onClick={this.toggleEdit}>Edit</button>
       </div>
      }  
      {/* {this.state.edit ?
        :
    
      } */}
      
      </div>
    )
  }
}

export default EditMountains