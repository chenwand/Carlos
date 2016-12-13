var mongoose = require('mongoose');

var PassagemSchema = new mongoose.Schema({
  empresa: String,
  origem: String,
  destino: String,
  conexoes: Number,
  duracao: Number,
  preco: Number,
  data: Date
});

module.exports = mongoose.model('Passagem', PassagemSchema);
