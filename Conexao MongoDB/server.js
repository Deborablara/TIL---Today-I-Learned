require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.emit('pronto')
  })
  .catch(e => console.log('Não foi possível conectar'))

const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(routes)

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Server executando na porta 3000!')
  })
})

/*
CREATE = POST
READ = get
UPDATE = PUT 
DELETE = DELETE

http://meusite.com/ <- GET -> ENTREGA A PÁGINA

 */
