import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header/Header'
import Mountain from './Mountain'
import CreateMountain from './CreateMountain'
import './MtnDisplay.css'

class MtnDisplay extends Component {
  constructor() {
    super()

    this.state = ({
      mountains: []
    })
  }


  componentDidMount(){
    axios.get('/api/mountains').then(res => {
      this.setState({
        mountains: res.data
      })
    }).catch(err => console.log(err))
  }

  createMountains = (addMountain) =>{
    axios.post('/api/mountains', addMountain).then(res => {
      this.setState({
        mountains: res.data
      })
    }).catch(err => console.log(err))
  }

  deleteMountains = (id) => {
    axios.delete(`/api/mountains/${id}`, id).then(res => {
      this.setState({
        mountains: res.data
      })
    }).catch(err => console.log(err))
  }

  editMountains = (id, mountain) => {
    console.log(id, mountain)
    axios.put(`/api/mountains/${id}`, mountain).then(res => {
      console.log(res.data)
      this.setState({
        mountains: res.data
      })
    }).catch(err => console.log(err))
  }

  render(){
    const { mountains } = this.state
    return(
      <div>
         <Header/>
        <div>
          <CreateMountain createMountains={this.createMountains}/>
        </div>
        <div className="mountain">
          {mountains.map(mountain => {
            console.log(mountain)
            return (
              <Mountain  key={mountain.id} mountain={mountain} deleteMountains={this.deleteMountains} editMountains={this.editMountains}/>
              
              )
            })}
         </div>
      </div>
    )
  }
}
     
export default MtnDisplay