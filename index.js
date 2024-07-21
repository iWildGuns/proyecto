const express = require('express')
const app = express()

// const fs = require('fs')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hola Express!')
})

app.get('/url', (req, res) => {
    res.send('Hola Express')
})

app.get('/watch', (req, res) =>  {
    res.send('<h2>probando watch</h2>')
})

const PORT = 3001

app.listen(PORT, () => console.log(`conectando el servidor en http://localhost:${PORT}`))
