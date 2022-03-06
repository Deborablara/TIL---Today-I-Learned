const HomeModel = require('../models/Home')

HomeModel.create({
  titulo: 'Um título de teste',
  descricao: 'Descricao teste'
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
  res.render('index')
}
