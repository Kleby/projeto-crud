const mongoose = require('mongoose');

const connect = ()=>{
  mongoose.connect("mongodb://localhost:27017/project-crud");
  
  const db = mongoose.connection;
  
  // caso sucesso na conexão
  db.once("open", () => console.log("Connected to DataBase!"));
  
  //caso erro na conexão
  db.on("error", console.error.bind(console, "Connection error"));
}

module.exports = {connect};