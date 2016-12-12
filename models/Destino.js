var mongoose = require('mongoose');

var DestinoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  distancia: Number
});

module.exports = mongoose.model('Destino', DestinoSchema);
