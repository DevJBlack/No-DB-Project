let id = 1
let mountains = [
  {
    id: id++,
    pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Mount_Timpanogos%2C_UT.jpg/220px-Mount_Timpanogos%2C_UT.jpg',
    name: "Mount Timpanogos",
    elevation: 11752,
    trail: "Timpooneke Trail",
    trailStats: "Miles: 14.2 Elevation Gain: 4566",
  },
  {
    id: id++,
    pic: 'https://media.nationalgeographic.org/assets/photos/000/285/28549.jpg',
    name: "Half Dome",
    elevation: 8800,
    trail: "Half Dome Trail",
    trailStats: "Miles: 14.8 Elevation Gain: 5164"
  }
] 

module.exports = {
  readMountains: (req, res) => res.send(mountains),
  createMountains: (req, res) => {
    let {pic, name, trail, trailStats} = req.body
    createMountain = {
      id: id++,
      pic,
      name,
      trail,
      trailStats
    }
    mountains.push(createMountain)
    res.send(mountains)
  },
  deleteMountains: (req, res) => {
    let { id } = req.params;

    let index = mountains.findIndex(mountain => +mountain.id === +id)
    mountains.splice(index, 1)
    
    res.send(mountains)
  },

  editMountains: (req, res) => {
    let { id } = req.params;

    let {pic, name, trail, trailStats } = req.body
    
    let updatedMountain = {
      id: id,
      pic,
      name,
      trail,
      trailStats
    }

    let index = mountains.findIndex(mountain => +mountain.id === +id)

    mountains.splice(index,1,updatedMountain)

    res.send(mountains)

  }
}