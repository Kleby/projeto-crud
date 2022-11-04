const bcrypt = require('bcrypt');

const crypto = async (psswd) => {
  // gerando um hash salt
  const salt = await bcrypt.genSalt();
  //Gerando uma senha hassh com a senha e o salt
  const password = await bcrypt.hash(psswd, salt);

  return password;
}

module.exports = { crypto};