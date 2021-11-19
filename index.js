const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello word GET')
})

app.head('/', (req, res) => {
    res.send('Hello word HEAD')
})

app.post('/', (req, res) => {
    res.send('Hello word POST')
})

app.listen(port, () => {
    console.log('Hello word GET')
})