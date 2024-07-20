const http = require('http')

const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

    console.log(__dirname)

    const pathFile = path.join(__dirname, 'public', 'index.html')

    const html = fs.readFileSync(pathFile)

    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
    res.end(html)
})

const PORT = env.process.PORT || 3001

server.listen(PORT, console.log(`conectando el servidor en http://localhost:${PORT}`))
