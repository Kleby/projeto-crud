const { Model } = require('mongoose');
const CustomersModel = require('../models/customers');

const add = (req, res) => {
  //destruturação doo body
  const {
    name,
    age,
    email,
    password
  } = req.body;

  //criando o registro para salvar os dados do model
  const register =  new CustomersModel({
    name,
    age,
    email,
    password
  });

  register.save();

  res.send("Cadatro realizado");
};

module.exports = {
  add,
}