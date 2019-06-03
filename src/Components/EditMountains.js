import React, { Component } from 'react' 
import './EditMountains.css'

class EditMountains extends Component {
  constructor(props){
    super(props)


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
    return(
      <div>   
       {this.state.edit ?
       <div className="input-boxes">
        <input type="text" placeholder="pic" value={this.state.pic} name="pic" onChange={this.handleChange}/>
        <input type="text" placeholder="name" value={this.state.name} name="name" onChange={this.handleChange}/>
        <input type="text" placeholder="trail" value={this.state.trail} name="trail" onChange={this.handleChange}/>
        <input type="text" placeholder="trailStats" value={this.state.trailStats} name="trailStats" onChange={this.handleChange}/>
       <div>
        <button onClick={() => this.editMountain()}>Edit</button>
       </div> 
       <div>
        <button onClick={this.toggleEdit}>Cancel</button>
       </div>
       </div>
        :
        <div>
          <div className="btn-container">
            <button className="out-btn" onClick={this.toggleEdit}>Edit</button>
          <div className="button">
            <button className="delete" onClick={() => this.props.deleteMountains(this.props.mountain.id)}>Delete</button>
          </div>  
              </div>
              
       </div>
      }  

      </div>
    )
  }
}

export default EditMountains