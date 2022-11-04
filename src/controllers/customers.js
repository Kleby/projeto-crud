const CustomersModel = require('../models/customers');
const {crypto} = require('../utils/password');

const defaultTitle = "Cadatro de Clientes";

const index = (req, res) =>{
    res.render('register', {
        title: defaultTitle
  });

};

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

  res.render('register',{
    title: defaultTitle,
    message: "cadastro realizado com sucesso!"

  });
};

const listUsers = async (req, res) => {
  const users = await CustomersModel.find();
  res.render('listUsers', {
    title: "listagem de Usuários",
    users,
  });
}

module.exports = {
  index,
  add,
  listUsers
};