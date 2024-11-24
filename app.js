const moment = require('moment')
const http = require('http')
const fs = require('fs')

const server = http.createServer((_, res) => {
    try {
        const text = fs.readFileSync("ola.txt", "utf8")
        res.writeHead(200, {"content-type" : "text/plain"})
        res.end(text)
      } catch (err) {
        console.error(err)
      }
})

server.listen(3000, () => {
    console.log(`Servidor iniciado em ${moment().format('DD/MM/YYYY HH:mm')}`);
    console.log("Servidor rodando em http://localhost:3000");
})