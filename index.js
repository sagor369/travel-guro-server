const express = require('express')
const app = express()
const port = 5000
const travels = require('./data/travels.json')
const cors = require('cors')

app.use(cors())

app.get('/travels', (req, res) =>{
    res.send(travels)
})
app.get('/travels/:id', (req, res) =>{
    const id = parseInt(req.params.id) 
    const selectTravel = travels.find(t => t.id === id)
    console.log(selectTravel)
    res.send(selectTravel) 
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
