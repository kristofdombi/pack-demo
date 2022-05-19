const express = require('express')

const server = express()

server.get('/', (_, res) => {
  console.log('RUNTIME env variable', process.env.RUNTIME)
  res.send('Hello Kinsta!')
})

server.get('/warn', (req, res) => {
  console.warn(`This is a warning message.\n ${req.ip} - ${req.path}`)
  res.send('Hello warning!')
})

server.get('/error', (req, res) => {
  console.error(`This is an error message.\n ${req.ip} - ${req.path}`)
  res.send('Hello error!')
})

const port = process.env.PORT || 8080

server.listen(port, () => {
  console.log('RUNTIME_ENV', process.env.RUNTIME)
  console.log(`Example app listening at http://localhost:${port}`)
})
