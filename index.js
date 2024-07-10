const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

const PORT = process.env.PORT || 3000

server.listen(3000, () => {
  console.log(`Server is listening http://localhost:${PORT}`)
})
