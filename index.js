var withDirectory = require('./withDir');
var noDir = require('./noDir');

//examples
var dir = 'pages/dashboard/home.html';
var file = 'sasad.html';
//examples

let explode = dir.split('/'); //Aqui vai o que o usuário digitar

//Verifica se existe diretórios para serem criados
//Se não, só cria o arquivo
if (explode.length > 1)
    withDirectory(dir, '');
else
    noDir(file, '');