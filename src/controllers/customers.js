const CustomersModel = require('../models/customers');
const {crypto} = require('../utils/password');

const add = async (req, res) => {
  //destruturação doo body
  const {
    name,
    age,
    email,
    password
  } = req.body;

  const passwordCrypto = await crypto(password);

  //criando o registro para salvar os dados do model
  const register =  new CustomersModel({
    name,
    age,
    email,
    password: passwordCrypto
  });

  register.save();

  res.send("Cadatro realizado");
};

module.exports = {
  add,
}