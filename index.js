'use strict'

import express from 'express'
import http from 'http'
import path from 'path'
import engine from 'socket.io'
import dbapi from './db-api'

const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = engine.listen(server)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/pokemons', (req, res) => {
  dbapi.pokemons.find(pokemons => {
    res.json(pokemons)
  })
})

server.listen(port, err => {
  if (err) console.error(err.message)
  else console.log(`Listening on http://localhost:${port}`)
})

io.on('connection', socket => {
  console.log('Cliente connected', socket.id)

  socket.on('message', msg => {
    socket.broadcast.emit('message', msg)
  })
})
