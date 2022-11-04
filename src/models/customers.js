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

//Estanciando o registro do modelo do banco
//e definindo os campos da  collection
// const register = new Model ({
//   name: "João Kleby",
//   age: 29,
//   email: "klebyteste@gmail.com",
//   password: "123456"
// })

// //salvando os registos definidos com o mpetodo save()
// register.save();

module.exports = Model;