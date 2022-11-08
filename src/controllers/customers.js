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

const list = async (req, res) => {
  const users = await CustomersModel.find();
  res.render('list', {
    title: "listagem de Usuários",
    users,
  });
}

const formEdit = async (req, res) => {
  const id = req.query.id;

  const user = await CustomersModel.findById(id);
  res.render('edit', {
    title: "Editar Usuário",
    user
  });
}

const edit = async (req, res) => {
  const {
    name,
    age,
    email,
  } = req.body;

  const id = req.params.id;

  const user = await CustomersModel.findById(id);

  user.name = name;
  user.age = age;
  user.email = email;

  user.save();

  res.render('edit',{
    title: "Editar usuário",
    user,
    message: "Usuário alterado com sucesso!"
  });
};

const remove = async (req, res) => {  
  const id = req.params.id;
  const remove = await CustomersModel.deleteOne({_id  : id});
  if(remove.acknowledged){
    res.redirect('/list');
  }

};

module.exports = {
  index,
  add,
  list,
  formEdit,
  edit,
  remove
};