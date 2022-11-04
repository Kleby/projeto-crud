const express = require('express');
const path = require('path');

const app = express();

//definindo a template engine ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

//definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')));

//habilitar server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true}));

//rotas
app.get('/', (req, res) =>  res.render('index', {
    title: 'Titulo Teste'
  })
);

// 404 error (not found)
app.use((req, res) => res.send("Página não encontrada!"));

//executando o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));