const mongoose = require('mongoose');

//criando a schema para clientes;
const schema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String
});

//criando o modelo do da collection customers
const Model = mongoose.model('custumers', schema);

module.exports = Model;