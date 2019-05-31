const express = require('express')
const MountainCtrl = require('./controllers/mountainCont')

const app = express()
const port = 4027

app.use(express.json())

app.get('/api/mountains', MountainCtrl.readMountains)
app.post('/api/mountains', MountainCtrl.createMountains)
app.delete('/api/mountains/:id', MountainCtrl.deleteMountains)
app.put('/api/mountains/:id', MountainCtrl.editMountains)


   



app.listen(port, () => {
  console.log('Listening on port', port)
})